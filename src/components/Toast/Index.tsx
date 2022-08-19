import { ToastService } from "./services/ToastService"
import './Toast.css'
import { Check } from "phosphor-react"

export function Toast({type, text}: ToastService){
    
    return(
        <div className={`toast toast-${type}`}>
            <div className="iconContainer">
                <Check size={30} weight="bold" color={'#1F9D55'} />
            </div>
            <div>
                <h2 className="font-bold text-[15px]">Sucesso</h2>
                <span>{text}</span>
            </div>
        </div>
    )
}
