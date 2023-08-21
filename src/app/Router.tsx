import {createBrowserRouter} from "react-router-dom";
import {Main} from "./components/Main/Main";
import {MovieDetails} from "./components/MovieDetails/MovieDetails";
import React from "react";
import {Login} from "./components/Login/Login";
import {Register} from "./components/Register/Register";
import {NotFound} from "./components/NotFound/NotFound";
import {routes} from "./constants/routes";

export const router = createBrowserRouter([
    {
        path: routes.HOME,
        element: <Main/>
    },
    {
        path: routes.DETAILS,
        element: <MovieDetails/>
    },
    {
        path: routes.LOGIN,
        element: <Login/>
    },
    {
        path: routes.REGISTER,
        element: <Register/>
    },
    {
        path: routes.ERROR,
        element: <NotFound/>
    }
]);