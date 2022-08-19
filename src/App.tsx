import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './store/user/UserSlice';

import { Provider } from 'react-redux';

import { Rotas } from './routes/rotas';

import './global.css';

import { ThemeToogle } from './components/ThemeToggle';
import { Toast } from './components/Toast/Index';

import { ThemeType, UserService } from './repositories/UserServices';
import { store } from './store';

export const userContext = createContext< UserService | null >(null);


function App() {
    
    //States
    const [theme, setTheme] = useState< ThemeType >('light');
    const [user, setUser] = useState< UserService | null >({ nome: null, theme: 'light' });

    //Variables
    const navigate = useNavigate();

    //Efects
    useEffect(()=>{
        navigate("/login");

        getThemeStorage();

        getUsersStorage();
    }, []);

    //Data Control
    function setThemeStorage(value?: ThemeType){

        localStorage.removeItem('theme');

        localStorage.setItem('theme', value!);
    }

    function getThemeStorage(){

        const storage = localStorage.getItem('theme');

        if(storage === 'dark' || storage == 'light'){
            handleChangeTheme(storage);
        }

    }
    
    //Storage Control
    function setUserStorage(value?: UserService){
        
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(value));

    }

    function getUsersStorage(){

        const storage  = JSON.parse(localStorage.getItem('user')!);

        if(typeof storage == typeof user){
            handleSetUser(storage);
        }else{
            console.log('nostore');
        }
    }

    //Methods
    function handleSetUser(value? : object){

    }

    function  handleChangeTheme(value? : ThemeType ){

        const app  = document.getElementById('app');

        setTheme(value!);
        setUser({theme:value});

        app?.classList.remove('dark');
        app?.classList.remove('light');
        app?.classList.add(`${value}`);
       
        setThemeStorage(value);
        
    }

    return (
        <main id='app' className="">
            <Provider store={store}>
                <userContext.Provider value={user}>
                    <ThemeToogle changeThemeEmit={handleChangeTheme}/> 
                    <Rotas/>
                    <Toast type='success' text='Successo ao logar e lorem inpsu out tyoe'/>
                </userContext.Provider>
            </Provider>
        </main>
    )
}

export default App

