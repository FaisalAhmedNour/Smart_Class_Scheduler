import { lazy, Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main/Main';
import Home from '../pages/Home/Home';
import Course from '../pages/Course/Course';
import SignIn from '../pages/SignIn.jsx/SIgnIn';
import SignUp from '../pages/SignUp/SignUp';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/course",
                element: <Course />
            }
        ]
    },
]);