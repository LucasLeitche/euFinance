import {Navigate, Outlet } from 'react-router-dom';

const auth = false;

export function PrivateRoute() {
    return(
        auth ?
        <Outlet/> :
        <Navigate to="/start"/>
    )
}