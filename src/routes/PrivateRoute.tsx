import {Route, Navigate } from 'react-router-dom';

import { PrivateRoutesService } from "../repositories/PrivateRoutesService";
import { isAuthenticated } from "./auth";
import { Login } from '../screens/Login';

export function PrivateRoute ({isPrivate, path, element, ...rest}:PrivateRoutesService){
    return(
        isAuthenticated() ?
        <Route path={path} element={element} {...rest}/> :
        <Route path='/login' element={<Login/>}/>
    )
}