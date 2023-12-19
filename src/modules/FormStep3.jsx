import { useMediaSun } from '@/hooks/useMediaSun';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const FormStep3 = () => {
  const { isDesktop } = useMediaSun();
  const handleNextStep = (step) => {
    handleSteps(step);
  };

  return (
    <>
      <div className='overflow-hidden pt-[163px] lg:pt-0 lg:overflow-auto lg:h-[calc(100vh_-_36px)] w-full text-center text-white lg:block flex flex-col justify-center'>
        <div className='flex-1'>
          <h2 className='text-sm font-semibold tracking-[0.087rem] max-w-[20rem] lg:max-w-none lg:text-base lg:mt-[250px] mx-auto'>TU FORMULARIO SE ENVIÓ EXITOSAMENTE</h2>
          <h1 className='text-[2.5rem] lg:text-5xl leading-[3rem] font-impact uppercase max-w-[17rem] lg:max-w-[30rem] lg:leading-snug m-auto mt-11 lg:mt-6'>Ya estás participando en el sorteo</h1>
          <h3 className='text-base lg:text-lg mt-14 mb-10 lg:my-[15px]'>¡Gracias por participar!</h3>
          <div className='px-4 lg:mt-16'>
            <NavLink to="/recipes"><button className='button w-full lg:w-52'>DESCUBRIR RECETAS</button></NavLink>
          </div>
        </div>
        <div className='animate__animated animate__fadeInUp bgSandBall pt-3 lg:absolute lg:left-0 lg:right-0 lg:bottom-0'>
          <figure></figure>
        </div>
      </div>
    </>
  )
}
