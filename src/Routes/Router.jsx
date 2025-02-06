import { lazy, Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import LoaderPage from "../components/Loader/LoaderPage";
import Main from '../Layout/Main/Main';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<LoaderPage open={true} />}><Main /></Suspense>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<LoaderPage open={true} />}><Home /></Suspense>
            }
        ]
    },
]);