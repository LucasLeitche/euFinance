import { useState } from "react"

export function ThemeToogle(){
    const [theme, setTheme] = useState<string|null>('')

    function  handleChangeTheme(value : string){
        const app  = document.getElementById('app');
        setTheme(value)
        app?.classList.remove('dark');
        app?.classList.remove('light');

        app?.classList.add(`${value}`)
        
    }

    return(
        <div className="bg-zinc-200 w-full max-w-[100px] absolute right-0 m-5 py-5 flex justify-around">
            <span>{theme}</span>
            <input type="radio" name="" id=""
                value="light"
                checked={theme === 'light'}
                onChange={(event) => handleChangeTheme(event.target.value)}  
            />
            <input type="radio" name="" id=""
                value="dark"
                checked={theme === 'dark'}
                onChange={(event) => handleChangeTheme(event.target.value)}  
            />
        </div>
    )
}