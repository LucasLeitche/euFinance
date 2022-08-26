import { ToastService } from "./services/ToastService"
import './Toast.css'
import { CheckCircle, Info, WarningCircle, XCircle } from "phosphor-react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/services/StoreServices";
import { useState } from "react";

export function Toast({type, text}: ToastService){

    const [show, setShow] = useState<boolean>(false)

    const theme = useSelector((state:RootState)=> state.user.theme);
    
    const colorIcon = function ():string{
        if(theme == 'light' && type == 'success'){
            return '#1F9D55';
        } 
        else if(theme == 'light' && type =='error'){
            return '#CC1F1A';
        } 
        else if(theme == 'light' && type =='info'){
            return '#2779BD';
        } 
        else if(theme =='light' && type == 'warning'){
            return '#F2D024';
        }  
        else{
            return 'white';
        }
    }

    if(show){
        return(
            <div className={`toast mx-2 toast-${type}`}>
                    {
                        type == 'success' 
                        ?
                            // <Check size={30} weight="bold" color={`${colorIcon()}`} />
                            <CheckCircle size={50} weight="bold" color={`${colorIcon()}`} />
                        : type == 'error'
                        ?
                            <XCircle size={50} weight="bold" color={`${colorIcon()}`} />
                        : type == 'info' 
                        ?
                            <Info size={50} weight="bold" color={`${colorIcon()}`} />
                        : 
                            <WarningCircle size={50} weight="bold" color={`${colorIcon()}`} />
                    }
                <div>
                    <h2 className="font-bold text-[15px]">Sucesso</h2>
                    <span>{text}</span>
                </div>
            </div>
        )

    } else{
        return(<></>)
    }
    
}
    
