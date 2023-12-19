import React from 'react'
import 'animate.css';
import icBirds from "@/assets/ic_birds.svg";
import imgHatSm from "@/assets/img_hat-sm.png";
import imgTablesSm from "@/assets/img_tables-sm.png";
import imgHat from "@/assets/img_hat.png";
import imgTables from "@/assets/img_tables.png";
import { useMediaSun } from '@/hooks/useMediaSun';
import { Slider } from '@/components/Slider';

export const FormStep1 = ({ handleSteps }) => {

  const handleNextStep = () => {
    handleSteps(2);
  };

  const { isDesktop } = useMediaSun();
  return (
    <>
      <div className='text-white text-center lg:text-left px-4 lg:px-0'>
        <div className='relative text-base lg:text-xl tracking-[0.1rem] lg:tracking-[0.125rem] mt-11 lg:mt-20'>
          <h2>PARTICIPA POR</h2>
          {!isDesktop && <img src={icBirds} alt="Imagen de pájaros" className='absolute right-7 bottom-1 w-[3.25rem]' />}
        </div>
        <h1 className='uppercase text-[2.5rem] font-impact max-w-[240px] lg:max-w-[450px] mx-auto lg:mx-0 lg:text-[4.68rem] lg:leading-[4.69rem] lg:mt-[5px] relative'>un viaje para 4 personas {isDesktop && <img src={icBirds} alt="Imagen de pájaros" className='absolute -right-14 top-1 w-[4.7rem]' />}</h1>
        <p className='text-base leading-6 mt-4 lg:text-lg lg:mt-4 lg:max-w-[85%]'>Te sorprendemos con un viaje de un fin de semana a la playa, recibe un kit de productos de bienvenida, hospédate en un cómodo hotel y disfruta de una deliciosa comida para 4 personas en un restaurante de la zona.</p>
      </div>
      <div className='relative mt-8 lg:mt-3'>
        <Slider />
      </div>
      <div className='absolute bottom-0 right-0 z-1 overflow-hidden animate__animated animate__fadeInRightBig'>
        <figure><img src={isDesktop ? imgHat : imgHatSm} alt="Imagen de sombrero con anteojos" className='bottom-0 absolute right-0 lg:w-[13.5rem]' /></figure>
        <figure><img src={isDesktop ? imgTables : imgTablesSm} alt="Imagen de tablas de surf" className='w-[9.3rem] lg:w-[17.25rem]' /></figure>
      </div>
      <div className='px-4 relative my-6 lg:mt-3 lg:px-0'>
        <button className='button w-full lg:w-[10.6rem] ' onClick={handleNextStep}>CONTINUAR</button>
      </div>
    </>
  )
}
