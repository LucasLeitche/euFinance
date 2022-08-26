import { FormEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/user/UserSlice';

import { Link, useNavigate } from 'react-router-dom';

import SmartPhoneFinance from './assets/img/Online_payment_Two_Color.svg';
import { ArrowLeft } from 'phosphor-react';

export function Login(){
    
    const dispatch = useDispatch();

    const [mail, setMail] = useState<string | null>(null);
    const [pass, setPass] = useState<string | null>(null);

    const navigate = useNavigate();

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        console.log('status')
        const payload = {mail, pass}
        dispatch(setLogin(payload))
    }

    return(
        <section className='dark:bg-black h-screen'>
             <ArrowLeft 
                size={30} weight="bold" className='text-light-lilac dark:text-light absolute left-5 top-6 block lg:hidden' 
                onClick={()=> navigate('/start')}
            />
            <button 
                className='absolute left-5 top-5 border  bg-dark-lilac dark:bg-transparent text-light rounded-lg hidden lg:flex items-center px-4 p-1'
                onClick={()=> navigate('/start')}   
            >
                <ArrowLeft size={30} weight="bold" className='' />
                <span className='ml-2 ' >Incio</span>
            </button>
            <div className='flex flex-col items-center justify-center h-full w-full'>
                <img className='w-full max-w-[450px]' 
                    src={SmartPhoneFinance} 
                    alt="Smartphone " 
                />
                <div className="flex flex-col items-center w-full max-w-[350px] px-5 gap-4 ">
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