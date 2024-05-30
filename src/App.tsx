import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Email from './components/Email';
import Password from './components/Password';
import { createBrowserRouter, RouterProvider ,Route, BrowserRouter as Router } from 'react-router-dom';
import { Switch } from '@mui/material';
import ErrorPage from './page/error-page';
import { Login } from './page/login';

// import { Router } from '@mui/icons-material';
// import { Switch } from '@mui/material';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      index: true,
      id: "0",
      element: <div><Email useEmailState={useState<string>("")} useErrorState={useState<boolean>(false)}/>
      <Password  usePassState={useState<string>("")} useErrorState={useState<boolean>(false)}/></div>,
      errorElement: <ErrorPage />
    },
    {
      path: '/login',
      id: "1",
      element: <Login />
    }

  ])

  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router}/>
      </React.StrictMode>

    </div>
  );
}

export default App;
