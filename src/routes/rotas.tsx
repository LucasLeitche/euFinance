import {BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from '../screens/Home'
import { Login } from '../screens/Login/Login';

export function Rotas (){
    const navigate = useNavigate();

    useEffect(()=>{
        navigate("/login")
    }, [])

    return(
        
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    )
}
