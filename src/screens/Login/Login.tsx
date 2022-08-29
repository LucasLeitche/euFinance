import { FormEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/user/UserSlice';

import { Link } from 'react-router-dom';

import SmartPhoneFinance from './assets/img/Online_payment_Two_Color.svg';

export function Login(){
    
    const dispatch = useDispatch();

    const [mail, setMail] = useState<string | null>(null);
    const [pass, setPass] = useState<string | null>(null);


    function handleSubmit(event: FormEvent){
        event.preventDefault();
        console.log('status')
        const payload = {mail, pass}
        dispatch(setLogin(payload))
    }

    return(
        <section className='dark:bg-black h-screen flex w-screen'>
            <div className='flex flex-col items-center justify-center h-full w-full'>
                <img className='w-full max-w-[450px]' 
                    src={SmartPhoneFinance} 
                    alt="Smartphone " 
                />
                <div className="flex flex-col items-center w-full max-w-xl px-5 gap-4 ">
                    <small className='dark:text-light text-dark-lilac text-[15px]'>
                        <strong className='text-yellow-400'>eu</strong>Finance
                    </small>
                    <form
                        onSubmit={(event) => handleSubmit(event)} 
                        className='flex flex-col w-full gap-3 items-center'>
                        <input 
                            className='input' 
                            onChange={ (event) => setMail(event.target.value)} 
                            type="mail" 
                            placeholder='E-mail'
                        />
                        <input 
                            className='input' 
                            onChange={ (event) => setPass(event.target.value)} 
                            type="password" 
                            placeholder='Senha'
                        />
                        <button 
                            type='submit'
                            className='btn btn-primary' 
                        >
                            Enviar
                        </button>
                        <Link 
                            to={'/user/new'} 
                            className="dark:text-light text-dark-lilac text-[15px]"
                        >
                            Esqueceu a senha
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    )
}