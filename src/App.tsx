import { useEffect } from 'react';

import { Routes , Route, Link, useNavigate } from 'react-router-dom';
import { ThemeToogle } from './components/ThemeToggle';

import './global.css'
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import {Rotas} from './routes/rotas'
function App() {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate("/login")
    }, [])

    return (
        <main id='app' className="">
            <ThemeToogle/>
            <Rotas/>
        </main>
    )
}

export default App
