import React, { useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = React.createContext();

export default function AuthProvider(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['auth', 'userCookie']);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({ capabilities: [] });
  const [error, setError] = React.useState(null);
  const [token, setToken] = React.useState(cookies.auth);

  const setLoginState = (loggedIn, token, user, error) => {
    setCookie('auth', token);
    setCookie('userCookie', user);
    setIsLoggedIn(loggedIn);
    setToken(token);
    setUser(user);
    setError(error || null);
  };

  const validateToken = useCallback(async (token) => {
    try {
      let validUser = jwt_decode(token);
      setLoginState(true, token, validUser);

      const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_SERVER}/api/users/profile`,
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await axios(options);
      if (response.status === 200) {
        setUser((prevUser) => ({ ...prevUser, ...response.data }));
      }
    } catch (e) {
      setLoginState(false, null, {}, e);
    }
  }, []);

  const can = (capability) =>
    user?.login_data?.role_data?.capabilities?.includes(capability);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/api/users/signin`,
        { username, password },
      );
      validateToken(response.data.token);
      return response.data.token;
    } catch (error) {
      setLoginState(false, null, {}, error);
    }
  };

  const signup = async (username, password, basic_info, role_data) => {
    const data = {
      login_data: { username, password, role_data },
      basic_info,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/api/users/signup`,
        data,
      );
      validateToken(response.data.token);
      return response.data.token;
    } catch (error) {
      setLoginState(false, null, {}, error);
    }
  };

  const logout = () => {
    removeCookie('auth');
    removeCookie('userCookie');
    setLoginState(false, null, {});
  };

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const tokenCheck = qs.get('token') || cookies.auth || null;
    validateToken(tokenCheck);
  }, [validateToken, cookies.auth]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, can, login, logout, signup, user, error, token }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
