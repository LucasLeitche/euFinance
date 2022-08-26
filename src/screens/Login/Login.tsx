

import { useSelector } from 'react-redux';
import FinanceIlustration from '../../assets/images/Finance_analytics _Monochromatic.svg';


import type { RootState } from '../../store/services/StoreServices';


export function Login(){

    const user = useSelector((state : RootState ) => state.user);
    // const dispatch = useDispatch();
    
    
    function handleAuthentication(){
        // if(userName == 'Lucas'){
        //     navigate('/')
        // }
    }
    return(
        <section className='dark:bg-black h-[100vh]'>
            <div className='flex flex-col items-center justify-center h-full w-full'>
                <img className='w-full max-w-[450px]' src={FinanceIlustration} alt="Ilustração Notbook Money" />
                <div className="flex flex-col justify-center items-center w-full max-w-[350px] px-5 gap-5 my-5">
                    <small className='dark:text-light text-dark-lilac text-[15px]'><strong className='text-yellow-400'>eu</strong>Finance</small>
                    <input 
                        className='input' 
                        // onChange={ (event) => changeUserName(event.target.value)} 
                        type="text" 
                        placeholder='Nome'
                    />
                    <button className='btn btn-primary' disabled={!user?.nome} onClick={ () => handleAuthentication()}>Enviar</button>
                </div>
            </div>
        </section>
    )
}