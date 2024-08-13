import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import PanelLayout from "../layouts/PanelLayout";
import PanelLayoutHomePage from "../pages/PanelLayoutPages/PanelLayoutHomePage";
import PanelLayoutProfilePage from "../pages/PanelLayoutProfilePage/PanelLayoutProfilePage";
import LoginLayoutPage from "../pages/LoginPage/LoginPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <HomePage />
        ),

    },
    {
        path: "/panel",
        element: <PanelLayout />,
        children:
            [
                {
                    path: "/panel",
                    element: <PanelLayoutHomePage />,
                },
                {
                    path: "/panel/profile",
                    element: <PanelLayoutProfilePage />,
                }
            ]
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

export default router;
