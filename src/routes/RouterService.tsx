import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../screens/Login/Login";
import { Home } from "../screens/Home";
import { NotFound } from "../components/NotFound/NotFound";
import { InitialScrren } from "../screens/initial/InitialScreen";
import { UserRegister } from "../screens/user/UserRegister";

export function RouterService(){
    return (
        <Router>
            <Routes>
                <Route path='/start' element={ <InitialScrren/> }/>
                <Route path='/login' element={ <Login/> }/>
                <Route path='/user/new' element={ <UserRegister/> }/>
                <Route path="/" element={ <PrivateRoute/> }>
                    <Route path='/' element={ <Home/> }/>
                </Route>
                    <Route path='*' element={ <NotFound/> }/>
            </Routes>
        </Router>
    )
}