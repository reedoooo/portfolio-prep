import React, { useState, useEffect, useContext } from 'react';
import Splash from '../pages/splash/Splash';
import Login from '../components/Auth/login';
import ResumePage from '../pages/resume/ResumePage';
import { useRoutes, useNavigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import CallBack from '../services/auth/CallBack';
import MyStuff from './login/MyStuff';
import UserProfile from './login/UserProfile';
import Auth from '../components/Auth/auth';
import theme from '../assets/theme';
import ProjectsPage from '../pages/projects/ProjectsPage';
import HomePage from '../pages/home/HomePage';
// import NavBar from '../components/headings/navbar/NavBar';
import { PageContext } from '../context/PageContext';
import Header from '../components/headings/header/Header';

export default function Main({ onLogin }) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  const { setPage, page } = useContext(PageContext);
  console.log('Main.js: page', page);

  const routing = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/home',
      element: <HomePage />,
    },
    {
      path: '/login',
      element: <Login onLogin={onLogin} />,
    },
    {
      path: '/privateroute/*',
      element: (
        <Auth>
          <MyStuff />
        </Auth>
      ),
    },
    {
      path: '/profile/*',
      element: (
        <Auth>
          <UserProfile />
        </Auth>
      ),
    },
    {
      path: '/resume',
      element: <ResumePage />,
    },
    {
      path: '/projects',
      element: <ProjectsPage />,
    },
    {
      path: '*',
      element: <CallBack />,
    },
  ]);

  useEffect(() => {
    const updatePage = () => {
      let page = window.location.href;
      setPage(page);
    };
    window.addEventListener('popstate', updatePage);
    return () => window.removeEventListener('popstate', updatePage);
  }, [setPage]);

  useEffect(() => {
    if (page === '/') {
      navigate('/home');
    }
  }, [page, navigate]);

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? (
        <Splash />
      ) : (
        <>
          <Header />
          {routing}
        </>
      )}
    </ChakraProvider>
  );
}
