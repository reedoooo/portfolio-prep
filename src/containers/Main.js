import React, { useState, useEffect } from 'react';
import Home from '../pages/home/Home';
import Splash from '../pages/splash/Splash';
import Login from '../components/Auth/login';
import ResumePage from '../pages/resume/ResumePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import CallBack from '../services/auth/CallBack';
import MyStuff from './login/MyStuff';
import UserProfile from './login/UserProfile';
import Auth from '../components/Auth/auth';
import theme from '../assets/theme';
import ProjectsPage from '../pages/projects/ProjectsPage';

// import { ThemeProvider } from "@chakra-ui/react";

export default function Main({ onLogin }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  const routes = [
    { path: '/', element: <Navigate to="/home" /> },
    { path: '/home', element: <Home /> },
    { path: '/login', element: <Login onLogin={onLogin} /> },
    { path: '/privateroute/*', element: <MyStuff /> },
    { path: '/profile/*', element: <UserProfile /> },
    { path: '/resume', element: <ResumePage /> },
    { path: '/projects', element: <ProjectsPage /> },
    { path: '*', element: <CallBack /> },
  ];

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? (
        <Splash />
      ) : (
        <Routes>
          {routes.map((route, index) =>
            route.path === '/profile' || route.path === '/privateroute' ? (
              <Route
                key={index}
                path={route.path}
                element={<Auth>{route.element}</Auth>}
              />
            ) : (
              <Route key={index} path={route.path} element={route.element} />
            ),
          )}
        </Routes>
      )}
    </ChakraProvider>
  );
}
