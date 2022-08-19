import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { userContext } from '../../App';

import { ChangeThemeEmitType } from "./services/ToggleServices"

export function ThemeToogle({changeThemeEmit}: ChangeThemeEmitType){
    const user = useContext(userContext)

    const navigate = useNavigate()
    useEffect(()=>{
        navigate("/login")
    }, [])


    return(
        <div className="bg-zinc-200 w-full max-w-[100px] absolute right-0 m-5 py-5 flex justify-around">
            <input type="radio" name="" id=""
                value="light"
                checked={user?.theme === 'light'}
                onChange={(event) => changeThemeEmit(event.target.value)}  
            />
            <input type="radio" name="" id=""
                value="dark"
                checked={user?.theme === 'dark'}
                onChange={(event) => changeThemeEmit(event.target.value)}  
            />
        </div>
    )
}