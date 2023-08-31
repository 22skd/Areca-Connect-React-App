import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import CompanyRegister from './pages/CompanyRegister';
import CompanyLogin from './pages/CompanyLogin';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import CompanyDash from './pages/CompanyDash';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "sign",
    element: <Signup/>,
  },
  {
    path: "CompReg",
    element: <CompanyRegister/>,
  },
  {
    path: "CompLogin",
    element: <CompanyLogin/>,
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
  },
  {
    path: "Companydash",
    element: <CompanyDash/>,
  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

