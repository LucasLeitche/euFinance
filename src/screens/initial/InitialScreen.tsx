import { useNavigate } from "react-router-dom";

import FinanceIlustration from '../initial/assets/img/Finance_analytics _Monochromatic.svg'

export function InitialScrren(){
    const navigate = useNavigate();

    return(
        <section className='dark:bg-black h-screen'>
            <div className='flex flex-col items-center justify-center gap-36 lg:gap-20 h-full w-full'>
                <div className="flex flex-col items-center text-center">
                    <img className='w-full max-w-[450px]' 
                        src={FinanceIlustration} 
                        alt="Ilustração Notbook Money" 
                    />
                    <small className='dark:text-light text-dark-lilac text-[15px]'>
                        <strong className='text-yellow-400'>eu</strong>Finance
                    </small>
                    <h1 className="text-xl lg:text-4xl font-bold dark:text-light">Conheça agora o <strong className='text-yellow-400'>eu</strong>Finance </h1>
                    <span className="dark:text-slate-400 text-slate-500 text-md lg:text-lg">Controle e administre as suas entradas e saidas financeiras com praticidade e facilidade.</span>
                </div>
                <div className="flex flex-col items-center w-full max-w-[1260px] px-5 gap-4 ">
                    <div className='flex flex-col lg:flex-row w-full gap-3 items-center max-w-xl '>
                        <button 
                            type='button'
                            className='btn btn-primary '
                            onClick={()=> navigate('/user/new')}
                        >
                            Criar Conta
                        </button>
                        <button 
                            type='button'
                            className='btn btn-secondary'
                            onClick={() => navigate('/login')} 
                        >
                            Entrar
                        </button>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}