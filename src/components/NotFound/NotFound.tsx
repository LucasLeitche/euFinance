import NotFoundIlustration from './assets/img/404_Page_Not Found_Monochromatic.svg'

export function NotFound(){
    return(
        <section id='not-found' className="darK:bg-black text-dark-lilac dark:text-zinc-200">
            <div className='dark:bg-black h-screen w-screen flex flex-col justify-center align-center'>
                <div className='container max-w-[1260px] mx-auto text-center'>
                    <img 
                        src={NotFoundIlustration} 
                        title='Página não encontrada'
                        alt="Ilustração do erro 404 página não encontrada" 
                        className='w-[40%] mx-auto'
                        />
                    <h1 className='text-[2rem] w-full'>Página não encontrada</h1>
                </div>
            </div>
        </section>
    )
}