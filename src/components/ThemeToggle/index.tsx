import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";

import { ChangeThemeEmitType } from "./services/ToggleServices"

import type { ThemeType, UserService } from '../../repositories/UserServices';
import type { RootState } from "../../store/services/StoreServices";
import { setUser } from "../../store/user/UserSlice";


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
        <div className="bg-zinc-200 w-full max-w-[100px] absolute right-0 m-5 py-5 flex justify-around">
            <input type="radio" name="" id=""
                value="light"
                checked={user.theme === 'light'}
                onChange={(event) => handleChangeTheme(event.target.value)}  
            />
            
            <input type="radio" name="" id=""
                value="dark"
                checked={user.theme === 'dark'}
                onChange={(event) => handleChangeTheme(event.target.value)}  
            />
            <strong>{user.theme}</strong>
        </div>
    )
}