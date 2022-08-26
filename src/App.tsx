
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, BrowserRouter as Router  } from 'react-router-dom';

import './global.css';

import { ThemeToogle } from './components/ThemeToggle';
import { Toast } from './components/Toast/Index';
import { Login } from './screens/Login/Login';
import { Home } from './screens/Home';

import type { RootState } from './store/services/StoreServices';
import { PrivateRoute } from './routes/PrivateRoute';



function App() {
    
    const user = useSelector((state :RootState ) => state.user);
    const dispatch = useDispatch();
    //State

    //Variables
    // const navigate = useNavigate();

    //Efects
    // useEffect(()=>{
    //     navigate("/login");
    //     getUsersStorage();
    // }, []);

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
            <ThemeToogle />
            <Toast type='success' text='Successo ao logar e lorem inpsu out tyoe'/>
            <Router>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/' element={ <PrivateRoute/> }>
                        <Route path='/' element={<Home/>}/>
                    </Route>
                </Routes>
            </Router>
                
        </main>
    )
}

export default App

