import {Route, Navigate, Outlet } from 'react-router-dom';

import { PrivateRoutesService, IPrivateRoutes } from "../repositories/PrivateRoutesService";
// import { isAuthenticated } from "./auth";

const auth = false
export function PrivateRoute() {
    return(
        auth ?
        <Outlet/> :
        <Navigate to="/login"/>
    )
}