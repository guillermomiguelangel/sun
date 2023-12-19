import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className='min-w-full flex flex-col lg:flex-row px-4 items-center justify-center h-24 lg:h-9 bg-[url(@/assets/bg_waves-mask.jpg)] bg-lightblue bg-blend-multiply text-white'>
                <p className='text-center uppercase text-[0.68rem] tracking-[0.034rem]'>Disfruta con responsabilidad. Producto sólo para mayores de 18 años.</p>
                <a className='lg:mt-0 lg:ml-3 mt-4 text-[0.68rem] tracking-[0.034rem] font-black'>VER BASES LEGALES</a>
            </div>
        </>
    )
}
