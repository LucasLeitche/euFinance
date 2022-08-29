
import { useSelector, useDispatch } from 'react-redux';
import { RouterService } from './routes/RouterService';
import './global.css';

import { ThemeToogle } from './components/ThemeToggle';
import { Toast } from './components/Toast/Index';

import { useLocation, useNavigate} from 'react-router-dom';

import type { RootState } from './store/services/StoreServices';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';




function App() {
    
    const user = useSelector((state :RootState ) => state.user);
    const dispatch = useDispatch();
    const location = useLocation();
    
    const [showBackButton, setShowBackButton] = useState(false);
    const [linkTo, setLinkTo] = useState(null);

    //State

    //Variables
    // const navigate = useNavigate();

    async function checkLocationIdentifier(){
        if(location.pathname == '/user/new' || location.pathname == '/login'){
            setShowBackButton(true);
            setLinkTo('/start')
        }
    }
    // Efects
    useEffect(()=>{
        if(location.pathname == '/start'){
            setShowBackButton(false);
        }else{
            checkLocationIdentifier();
        }
    }, [location]);

    //Data Control
    

    
    
    //Storage Control
    // function setUserStorage(value : UserService){
        
    //     localStorage.removeItem('user');
    //     localStorage.setItem('user', JSON.stringify(value));

    // }

    // function getUsersStorage(){

    //     const storage  = JSON.parse(localStorage.getItem('user')!);

    //     if(typeof storage == typeof user){
    //         handleSetUser(storage);
    //     }else{
    //         console.log('nostore');
    //     }
    // }

    // //Methods
    // function handleSetUser(value : object){

    // }


    

    return (
        <main id='app' className="">
            <Header hasBackButton={showBackButton ? true : false} linkBackButton={linkTo}/>
            <Toast type='warning' text='Successo ao logar e lorem inpsu out tyoe'/>
            <RouterService/>
        </main>
    )
}

export default App

