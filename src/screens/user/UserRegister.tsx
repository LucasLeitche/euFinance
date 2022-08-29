import {Link} from "react-router-dom";


export function UserRegister(){

    return(
        <section className="dark:bg-black w-sreen h-screen flex flex-col justify-center items-center w-full max-w-xl ">
            <div className="text-center container flex flex-col gap-5 ">
                <h1 className="text-2xl text-light-lilac dark:text-light-lilac">Qual o seu nome?</h1>
                <form className="flex gap-3">
                    <input className="input" placeholder="Nome" type="text" name="" id="" />
                    <input className="input" placeholder="Sobrenome" type="text" id="" />
                </form>
            </div>
            <footer id="register-footer" className="w-full absolute bottom-0 left-0 flex border-t border-gray-400">
                <Link to='/login' className="m-auto p-3 text-dark-blue">
                    <span>Já possuo uma conta</span>
                </Link>
            </footer>
        </section>
    )
}