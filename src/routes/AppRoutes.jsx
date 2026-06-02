import React from 'react'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import LoginForm from '../components/auth/LoginForm';
import RegisterFrom from '../components/auth/RegisterFrom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from './protectedroute/ProtectedRoute';
import PublicRoute from './protectedroute/PublicRoute';

const AppRoutes = () => {
    const router = createBrowserRouter([
  {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element:<Navbar />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/routes",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: <ProtectedRoute />,
          children: [
           
          ],
        },
      ],
    },
]);
  return <RouterProvider router={router} />
}

export default AppRoutes