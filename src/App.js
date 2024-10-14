import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Main from './pages/Main';
import About from './pages/About';
import ConfirmationPage from './pages/ConfirmationPage';
import MessagePage from './pages/MessagePage';
import ErrorPage from './pages/ErrorPage';
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main className="aopa" />,
    errorElement: <ErrorPage />,
  },
  { path: '/about', element: <About />, errorElement: <ErrorPage /> },
  { path: '/confirm/:mid', element: <ConfirmationPage /> },
  { path: '/message/:mid', element: <MessagePage /> },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
