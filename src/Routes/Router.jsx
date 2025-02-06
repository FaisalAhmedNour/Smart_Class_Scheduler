import { lazy, Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main/Main';
import Home from '../pages/Home/Home';
import Course from '../pages/Course/Course';

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
                path: "/course",
                element: <Course />
            }
        ]
    },
]);