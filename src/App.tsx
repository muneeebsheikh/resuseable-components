import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './page/error-page';
import { Login } from './page/login';
import { Home } from './page/home';

// import { Router } from '@mui/icons-material';
// import { Switch } from '@mui/material';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      index: true,
      id: "0",
      element: <Home/>,
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
