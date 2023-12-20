import React from 'react';
import { motion } from "framer-motion";
import { BlueLayout } from '../layout/BlueLayout';
import { useMediaSun } from '../hooks/useMediaSun';
import { useRef, useState } from 'react';

export const RecipesPage = () => {
  const { isDesktop } = useMediaSun();
  const refModal = useRef(null);
  const [state, setState] = useState(1);

  const setImageUrl = (name) => {
    return !import.meta.env.PROD ? `/src/${name}` : `/${name}`;
  }

  const dataRecipes = [
    {
      title: 'Bramble',
      icon: '../assets/ic_beefeater.png',
      thumb: '../assets/img_thumb-1.jpg',
      url: '../assets/img_recipes-1.jpg',
      description: '60 ml Gin Beefeater, 20 ml jarabe de goma, 20 ml jugo de limón, 10 ml mermelada de mora, Cristalería: Copa balón'
    },
    {
      title: 'Pink tonic',
      icon: '../assets/ic_beefeater.png',
      thumb: '../assets/img_thumb-2.jpg',
      url: '../assets/img_recipes-2.jpg',
      description: '1/3 de Beefeater Pink, 2/3 Agua tónica, Decoración: frutilla, Cristalería: Copa balón'
    },
    {
      title: 'Rosato Tonic ',
      icon: '../assets/ic_ramazzotti.png',
      thumb: '../assets/img_thumb-3.jpg',
      url: '../assets/img_recipes-3.jpg',
      description: '1/3 de aperitivo Rosato, 2/3 de Agua tónica, Decoración: rodajas de limón, Cristalería: Copa'
    },
    {
      title: 'Violetto Tonic',
      icon: '../assets/ic_ramazzotti.png',
      thumb: '../assets/img_thumb-4.jpg',
      url: '../assets/img_recipes-4.jpg',
      description: '1/3 de aperitivo Violetto, 2/3 Agua tónica, Decoración: Arándanos y ramita de Romero, Cristalería: Copa'
    },
    {
      title: 'Moscow mule',
      icon: '../assets/ic_absolut.png',
      thumb: '../assets/img_thumb-5.jpg',
      url: '../assets/img_recipes-5.jpg',
      description: '45 ml Absolut vodka (Elyx u original), 15 ml jugo de limón, 150 ml ginger beer, Decoración: drop de limón y lámina de jengibre'
    },
    {
      title: 'Piña Colada',
      icon: '../assets/ic_malibu.png',
      thumb: '../assets/img_thumb-6.jpg',
      url: '../assets/img_recipes-6.jpg',
      description: '50 ml Malibú, 75 ml Jugo de Piña, 25 ml de crema de coco, Técnica: batir en coctelera con hielo, Decoración: Trozo de piña., Cristalería: vaso largo'
    },
    {
      title: 'Ballantine\'s Wild Tonic',
      icon: '../assets/ic_ballan.png',
      thumb: '../assets/img_thumb-7.jpg',
      url: '../assets/img_recipes-7.jpg',
      description: '1/3 de Ballantine\'s Wild, 2/3 de Agua tónica, Hielo, Decoración: rodaja de limón sutil, Cristalería: vaso largo'
    },
    {
      title: 'Mojito',
      icon: '../assets/ic_havana.png',
      thumb: '../assets/img_thumb-8.jpg',
      url: '../assets/img_recipes-8.jpg',
      description: '45 ml Havana Club 3 años, 20 ml jarabe de goma, 30 ml jugo de limón, Macerar hojas de menta con la goma y limón, Soda, Hielo picado, decoración: ramo de menta, Cristalería: vaso ronero'
    },
    {
      title: 'Cuba Libre',
      icon: '../assets/ic_havana.png',
      thumb: '../assets/img_thumb-9.jpg',
      url: '../assets/img_recipes-9.jpg',
      description: '1/3 de ron Havana Club Especial, 2/3 de bebida cola, Hielo, Decoración: 1 Rodaja de naranja, Cristalería: Vaso ronero'
    },
    {
      title: 'Jameson Ginger & Lime',
      icon: '../assets/ic_jameson.png',
      thumb: '../assets/img_thumb-10.jpg',
      url: '../assets/img_recipes-10.jpg',
      description: '1/3 de Jameson, 2/3 de ginger Ale, Decoración: gajo de limón sutil, Cristalería: Vaso largo'
    },
    {
      title: 'SUNRISE TEQUILA',
      icon: '../assets/ic_olmeca.png',
      thumb: '../assets/img_thumb-11.jpg',
      url: '../assets/img_recipes-11.jpg',
      description: 'Abundante hielo, 1/3 de Olmeca Blanco, 1/3 Jugo de limón, 1/3 triple sec Sal'
    },
    {
      title: 'LILLET TONIC',
      icon: '../assets/ic_lillet.png',
      thumb: '../assets/img_thumb-12.jpg',
      url: '../assets/img_recipes-12.jpg',
      description: 'Hielo, 1/3 de Lillet, 2/3 agua tónica, Decorar con pepino y frutilla'
    },
    {
      title: 'Chivas Royal',
      icon: '../assets/ic_chivas.png',
      thumb: '../assets/img_thumb-13.jpg',
      url: '../assets/img_recipes-13.jpg',
      description: '60 ml Chivas 12, 30 ml jarabe de goma, 30 ml Jugo de limón, 30 ml de jugo de naranja, Decoración: Rodaja de naranja, Cristalería: Copa Chivas'
    }
  ]

  const handleModal = (id) => {
    const modal = refModal.current;
    modal.showModal();
    setState(id);
  }
  return (
    <BlueLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <section className='px-5 lg:px-0 max-w-[1200px] m-auto w-screen pb-20'>
          <h1 className='font-impact mt-[60px] lg:mt-0 lg:text-5xl text-[2.5rem] text-center text-white mb-8'>{isDesktop ? 'DESCUBRE NUESTRAS RECETAS' : 'NUESTRAS RECETAS'}</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 lg:gap-y-6 w-full left-1/2 -translate-x-1/2 relative'>
            {
              dataRecipes.map((item, index) => {
                return <div key={index} onClick={() => handleModal(index)} className='cursor-pointer'>
                  <figure className={`h-[162px] lg:h-[360px] overflow-hidden relative`}>
                    <img src={setImageUrl(item.url)} alt="" className='lg:absolute lg:top-[80px] lg:left-0 lg:scale-[1.45]' />
                  </figure>
                  <div className='flex flex-wrap mt-3 lg:mt-5 h-[50px] items-center relative'>
                    <hr className='bg-white h-[1px] w-full text-white' />
                    <figure className='bg-white w-[90px] h-[50px] flex justify-center items-center px-2'>
                      <img src={setImageUrl(item?.icon)} alt="" className='max-w-20 inline-block max-h-[80%]' />
                    </figure>
                    <p className='text-white text-sm lg:text-base font-medium uppercase ml-4 tracking-[1.4px]'>{item.title}</p>
                    <i className='absolute right-0'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path d="M16 6.98771C15.9999 7.25291 15.8945 7.50722 15.707 7.69471L9.707 13.6947C9.5184 13.8769 9.2658 13.9777 9.0036 13.9754C8.7414 13.9731 8.49059 13.8679 8.30518 13.6825C8.11977 13.4971 8.0146 13.2463 8.01233 12.9841C8.01005 12.7219 8.11084 12.4693 8.293 12.2807L12.586 7.98771L1 7.98771C0.734783 7.98771 0.480428 7.88235 0.292892 7.69482C0.105356 7.50728 -3.17036e-07 7.25293 -3.05443e-07 6.98771C-2.9385e-07 6.72249 0.105356 6.46814 0.292892 6.2806C0.480428 6.09307 0.734783 5.98771 1 5.98771L12.586 5.98771L8.293 1.69471C8.11084 1.50611 8.01005 1.25351 8.01233 0.99131C8.0146 0.729114 8.11977 0.478301 8.30518 0.292893C8.49059 0.107485 8.7414 0.0023159 9.0036 3.74966e-05C9.2658 -0.00224091 9.5184 0.0985539 9.707 0.280712L15.707 6.28071C15.8945 6.4682 15.9999 6.72252 16 6.98771Z" fill="white" />
                      </svg>
                    </i>
                    <hr className='bg-white h-[1px] w-full text-white' />
                  </div>
                </div>
              })
            }
          </div>
          {/* <button className='button w-full'>CARGAR MÁS</button> */}
          <dialog ref={refModal} idclassName="modal" className='w-[90vw] m-auto fixed bg-transparent animate__animated animate__fadeInDown'>
            <div className='justify-center flex'>
              <div className="modal-box rounded-none p-0 w-[90vw] max-h-none">
                <form method="dialog" className='relative'>
                  {/* if there is a button in form, it will close the modal */}
                  <button className="absolute right-3 top-3 w-auto h-auto text-4xl bg-transparent hover:bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                      <rect x="9.89941" y="31.1123" width="30" height="2" rx="1" transform="rotate(-45 9.89941 31.1123)" fill="white" />
                      <rect x="31.1128" y="32.5264" width="30" height="2" rx="1" transform="rotate(-135 31.1128 32.5264)" fill="white" />
                    </svg>
                  </button>
                </form>
                <div className='w-[90vw] bg-white'>
                  <figure className='w-[90vw]'>
                    <img src={setImageUrl(dataRecipes[state].url)} alt="" />
                  </figure>
                  <div className='px-4'>
                    <p className='mt-4 text-black text-[1.875rem] font-impact leading-[3.5rem] uppercase'>{dataRecipes[state].title}</p>
                    <hr className='w-[8rem] h-[0.3rem] bg-black' />
                    <ul className='uppercase text-sm space-y-8 mt-8 pb-7'>
                      {
                        dataRecipes[state].description.split(',').map((description, index) => {
                          return <li key={index}>{description}</li>
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </section>
      </motion.div>
    </BlueLayout>
  )
}
