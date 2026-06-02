import React, { useEffect } from 'react'; // 👈 useEffect import kiya
import { useDispatch } from "react-redux"; // 👈 Curly braces {} lagaye
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Apne baki saare components aur thunks ko sahi path se import karein
import { currentLoggedEmployee } from "../../../../redux/authThunk"; // 👈 Sahi path check kar lena
import PublicRoute from "./PublicRoute"; 
import AuthLayout from "./AuthLayout";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "./DashboardLayout";
import Home from "./Home";

// 👑 RULE: Router ko component ke BAHAR banana hai
const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute />,
        children: [
            {
                path: "",
                element: <AuthLayout />,
                children: [
                    {
                        path: "",
                        element: <Login />,
                    },
                    {
                        path: "register", // 👈 Yaad rakhein: children routes ke path ke aage "/" nahi lagate, sirf "register" likhein
                        element: <Register />,
                    },
                ],
            },
        ],
    },
    {
        path: "/home",
        element: <ProtectedRoute />,
        children: [
            {
                path: "",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "",
                        element: <Home />
                    },
                ],
            }
        ]
    },
]);

const AppRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Bina IIFE ke direct dispatch chalega
        dispatch(CureentMovie());
    }, [dispatch]); // dependency array mein dispatch daalna achhi practice hai

    // Ab yahan baar-baar naya router nahi banega
    return <RouterProvider router={router} />;
};

export default AppRoutes;