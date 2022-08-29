import { ArrowLeft } from "phosphor-react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { RouterService } from "../../routes/RouterService";
import { ThemeToogle } from "../ThemeToggle";

interface IHeaderProps{
    linkBackButton?: string | null;
    hasBackButton?: boolean;
    hasThemeToggle?: boolean;
}

export function Header({linkBackButton, hasBackButton = true, hasThemeToggle = true}:IHeaderProps){
    const navigate = useNavigate();

    return(
        <header id="header-register">
                    {
                        !hasBackButton 
                        ?
                            <></>
                        :
                            <div>
                                <ArrowLeft 
                                    xlinkTitle="teste"
                                    size={30} weight="bold" className='text-light-lilac dark:text-light absolute left-5 top-6 block lg:hidden' 
                                    onClick={()=> navigate(linkBackButton!)}
                                />
                                <button 
                                    title="Voltar ao menu inicial"
                                    className='absolute left-5 top-5 border  bg-dark-lilac dark:bg-transparent text-light rounded-lg hidden lg:flex items-center px-4 p-1'
                                    onClick={()=> navigate(linkBackButton!)}   
                                >
                                    <ArrowLeft size={30} weight="bold" className='' />
                                    <span className='ml-2 ' >Início</span>
                                </button>
                            </div>      
                    }
                    {
                        !hasThemeToggle
                        ?
                            <></>
                        :
                        <ThemeToogle/>
                    }
                
        </header>
    )
}