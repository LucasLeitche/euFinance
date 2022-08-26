import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { ChangeThemeEmitType } from "./services/ToggleServices"

import type { ThemeType, UserService } from '../../repositories/UserServices';
import type { RootState } from "../../store/services/StoreServices";
import { setUser } from "../../store/user/UserSlice";

import {Moon, Sun} from 'phosphor-react'

export function ThemeToogle(){

    const dispatch = useDispatch();
    
function getThemeStorage(){

        const storage = localStorage.getItem('theme');

        if(storage == 'dark' || storage == 'light'){
            // handleChangeTheme(storage);
        }

    }

    function  handleChangeTheme(value : ThemeType ){

        const app  = document.getElementById('app');
    
        dispatch(setUser({ theme: value }));
    
    
        app?.classList.remove('dark');
        app?.classList.remove('light');
        app?.classList.add(`${value}`);
        console.log('changeTheme', value)
        setThemeStorage(value);
        
    }
    
    function setThemeStorage(value : ThemeType){
        console.log('setStore', value)
        localStorage.removeItem('theme');
    
        localStorage.setItem('theme', value!);
    }

    const user = useSelector((state :RootState) => state.user)

    useEffect(()=>{
        console.log(user);
    }, [])


    return(
        <div className="border border-dark shadow-sm shadow-dark-lilac dark:shadow-lg dark:border-light-lilac absolute right-0 m-5 p-1">
            <div className="hidden">
                <input type="radio" name="" id="chek-light"
                    value="light"
                    checked={user.theme === 'light'}
                    onChange={(event) => handleChangeTheme(event.target.value)}  
                />
                 <input type="radio" name="" id="check-dark"
                    value="dark"
                    checked={user.theme === 'dark'}
                    onChange={(event) => handleChangeTheme(event.target.value)}  
                />
             </div>
                {
                    user.theme == 'light' 
                        ?
                            <Moon size={30} className="" color='black'  onClick={() => handleChangeTheme('dark')}/>
                        :
                            <Sun size={30} color='white' onClick={() => handleChangeTheme('light')} />
                }            
                   
               
           
        </div>
    )
}