import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setTheme } from './store/user/UserSlice';


import { Rotas } from './routes/rotas';



import './global.css';

import { ThemeToogle } from './components/ThemeToggle';
import { Toast } from './components/Toast/Index';

import type { ThemeType, UserService } from './repositories/UserServices';
import type { RootState } from './store/services/StoreServices';



function App() {
    
    const user = useSelector((state :RootState ) => state.user);
    const dispatch = useDispatch();
    //State

    //Variables
    const navigate = useNavigate();

    //Efects
    useEffect(()=>{
        navigate("/login");

        getThemeStorage();

        getUsersStorage();
    }, []);
    type storageValue = 'light' | 'dark'
    //Data Control
    function setThemeStorage(value : ThemeType){

        localStorage.removeItem('theme');

        localStorage.setItem('theme', value!);
    }

    function getThemeStorage(){

        const storage = localStorage.getItem('theme');

        if(storage == 'dark' || storage == 'light'){
            handleChangeTheme(storage);
        }

    }
    
    //Storage Control
    function setUserStorage(value : UserService){
        
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
    function handleSetUser(value : object){

    }

    function  handleChangeTheme(value : ThemeType ){

        const app  = document.getElementById('app');

        dispatch(setUser({ theme: value }));

        

        app?.classList.remove('dark');
        app?.classList.remove('light');
        app?.classList.add(`${value}`);
       
        setThemeStorage(value);
        console.log('passou aqui ')
        
    }

    return (
        <main id='app' className="">
                <ThemeToogle changeThemeEmit={handleChangeTheme}/> 
                <Rotas/>
                <Toast type='success' text='Successo ao logar e lorem inpsu out tyoe'/>
        </main>
    )
}

export default App

