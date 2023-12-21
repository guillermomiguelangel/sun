import React from 'react';
import { easeInOut, motion } from "framer-motion";
import { BlueLayout } from '../layout/BlueLayout';
import { useMediaSun } from '../hooks/useMediaSun';
import { useRef, useState } from 'react';
import Modal from 'react-modal';

export const RecipesPage = () => {
  const { isDesktop } = useMediaSun();
  const refModal = useRef(null);
  const [state, setState] = useState({
    recipesId: 1,
    modalIsOpen: false,
  });

  const setImageUrl = (name) => {
    return !import.meta.env.PROD ? `/src/${name}` : `/${name}`;
  }

  const dataRecipes = [
    {
      title: 'Bramble',
      icon: 'assets/ic_beefeater.png',
      thumb: 'assets/thumb-1.jpg',
      url: 'assets/modal-1.jpg',
      thumbSm: 'assets/thumb-1-sm.jpg',
      urlSm: 'assets/modal-1-sm.jpg',
      description: '60 ml Gin Beefeater, 20 ml jarabe de goma, 20 ml jugo de limón, 10 ml mermelada de mora, Cristalería: Copa balón'
    },
    {
      title: 'Pink tonic',
      icon: 'assets/ic_beefeater.png',
      thumb: 'assets/thumb-2.jpg',
      url: 'assets/modal-2.jpg',
      thumbSm: 'assets/thumb-2-sm.jpg',
      urlSm: 'assets/modal-2-sm.jpg',
      description: '1/3 de Beefeater Pink, 2/3 Agua tónica, Decoración: frutilla, Cristalería: Copa balón'
    },
    {
      title: 'Rosato Tonic ',
      icon: 'assets/ic_ramazzotti.png',
      thumb: 'assets/thumb-3.jpg',
      url: 'assets/modal-3.jpg',
      thumbSm: 'assets/thumb-3-sm.jpg',
      urlSm: 'assets/modal-3-sm.jpg',
      description: '1/3 de aperitivo Rosato, 2/3 de Agua tónica, Decoración: rodajas de limón, Cristalería: Copa'
    },
    {
      title: 'Violetto Tonic',
      icon: 'assets/ic_ramazzotti.png',
      thumb: 'assets/thumb-4.jpg',
      url: 'assets/modal-4.jpg',
      thumbSm: 'assets/thumb-4-sm.jpg',
      urlSm: 'assets/modal-4-sm.jpg',
      description: '1/3 de aperitivo Violetto, 2/3 Agua tónica, Decoración: Arándanos y ramita de Romero, Cristalería: Copa'
    },
    {
      title: 'Moscow mule',
      icon: 'assets/ic_absolut.png',
      thumb: 'assets/thumb-5.jpg',
      url: 'assets/modal-5.jpg',
      thumbSm: 'assets/thumb-5-sm.jpg',
      urlSm: 'assets/modal-5-sm.jpg',
      description: '45 ml Absolut vodka (Elyx u original), 15 ml jugo de limón, 150 ml ginger beer, Decoración: drop de limón y lámina de jengibre'
    },
    {
      title: 'Piña Colada',
      icon: 'assets/ic_malibu.png',
      thumb: 'assets/thumb-6.jpg',
      url: 'assets/modal-6.jpg',
      thumbSm: 'assets/thumb-6-sm.jpg',
      urlSm: 'assets/modal-6-sm.jpg',
      description: '50 ml Malibú, 75 ml Jugo de Piña, 25 ml de crema de coco, Técnica: batir en coctelera con hielo, Decoración: Trozo de piña., Cristalería: vaso largo'
    },
    {
      title: 'Ballantine\'s Wild Tonic',
      icon: 'assets/ic_ballan.png',
      thumb: 'assets/thumb-7.jpg',
      url: 'assets/modal-7.jpg',
      thumbSm: 'assets/thumb-7-sm.jpg',
      urlSm: 'assets/modal-7-sm.jpg',
      description: '1/3 de Ballantine\'s Wild, 2/3 de Agua tónica, Hielo, Decoración: rodaja de limón sutil, Cristalería: vaso largo'
    },
    {
      title: 'Mojito',
      icon: 'assets/ic_havana.png',
      thumb: 'assets/thumb-8.jpg',
      url: 'assets/modal-8.jpg',
      thumbSm: 'assets/thumb-8-sm.jpg',
      urlSm: 'assets/modal-8-sm.jpg',
      description: '45 ml Havana Club 3 años, 20 ml jarabe de goma, 30 ml jugo de limón, Macerar hojas de menta con la goma y limón, Soda, Hielo picado, decoración: ramo de menta, Cristalería: vaso ronero'
    },
    {
      title: 'Cuba Libre',
      icon: 'assets/ic_havana.png',
      thumb: 'assets/thumb-9.jpg',
      url: 'assets/modal-9.jpg',
      thumbSm: 'assets/thumb-9-sm.jpg',
      urlSm: 'assets/modal-9-sm.jpg',
      description: '1/3 de ron Havana Club Especial, 2/3 de bebida cola, Hielo, Decoración: 1 Rodaja de naranja, Cristalería: Vaso ronero'
    },
    {
      title: 'Jameson Ginger & Lime',
      icon: 'assets/ic_jameson.png',
      thumb: 'assets/thumb-10.jpg',
      url: 'assets/modal-10.jpg',
      thumbSm: 'assets/thumb-10-sm.jpg',
      urlSm: 'assets/modal-10-sm.jpg',
      description: '1/3 de Jameson, 2/3 de ginger Ale, Decoración: gajo de limón sutil, Cristalería: Vaso largo'
    },
    {
      title: 'SUNRISE TEQUILA',
      icon: 'assets/ic_olmeca.png',
      thumb: 'assets/thumb-11.jpg',
      url: 'assets/modal-11.jpg',
      thumbSm: 'assets/thumb-11-sm.jpg',
      urlSm: 'assets/modal-11-sm.jpg',
      description: 'Abundante hielo, 1/3 de Olmeca Blanco, 1/3 Jugo de limón, 1/3 triple sec Sal'
    },
    {
      title: 'LILLET TONIC',
      icon: 'assets/ic_lillet.png',
      thumb: 'assets/thumb-12.jpg',
      url: 'assets/modal-12.jpg',
      thumbSm: 'assets/thumb-12-sm.jpg',
      urlSm: 'assets/modal-12-sm.jpg',
      description: 'Hielo, 1/3 de Lillet, 2/3 agua tónica, Decorar con pepino y frutilla'
    },
    {
      title: 'Chivas Royal',
      icon: 'assets/ic_chivas.png',
      thumb: 'assets/thumb-13.jpg',
      url: 'assets/modal-13.jpg',
      thumbSm: 'assets/thumb-13-sm.jpg',
      urlSm: 'assets/modal-13-sm.jpg',
      description: '60 ml Chivas 12, 30 ml jarabe de goma, 30 ml Jugo de limón, 30 ml de jugo de naranja, Decoración: Rodaja de naranja, Cristalería: Copa Chivas'
    }
  ]

  const handleModal = (id) => {
    setState({
      recipesId: id,
      modalIsOpen: !state.modalIsOpen,
    });
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      background: 'transparent',
      transform: 'translate(-50%, -50%)',
      overflow: 'auto',
    },
  };

  return (
    <BlueLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <section className='px-5 lg:px-0 max-w-[1200px] m-auto w-screen pb-20 overflow-auto h-90vh'>
          <h1 className='font-impact font-normal mt-[60px] lg:mt-0 lg:text-5xl text-[2.5rem] text-center text-white mb-8'>{isDesktop ? 'DESCUBRE NUESTRAS RECETAS' : 'NUESTRAS RECETAS'}</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 lg:gap-y-6 w-full left-1/2 -translate-x-1/2 relative'>
            {
              dataRecipes.map((item, index) => {
                return <div key={index} onClick={() => handleModal(index)} className='cursor-pointer'>
                  <figure className={`h-[162px] lg:h-[360px] overflow-hidden relative`}>
                    <img src={isDesktop ? setImageUrl(item.thumb) : setImageUrl(item.thumbSm)} alt="" className='' />
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
          <Modal
            ref={refModal}
            isOpen={Boolean(state.modalIsOpen)}
            onRequestClose={() => handleModal(state.recipesId)}
            style={customStyles}
          >
            <div className='justify-center flex animate__animated animate__fadeInDown overflow-auto h-screen lg:h-auto relative top-4'>
              <button className="w-10 h-10 absolute right-3 top-3 text-4xl bg-transparent hover:bg-transparent" onClick={() => handleModal(state.recipesId)}>
                {isDesktop && <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                  <rect x="9.89941" y="31.1123" width="30" height="2" rx="1" transform="rotate(-45 9.89941 31.1123)" fill={!isDesktop ? 'white' : '#00000040'} />
                  <rect x="31.1128" y="32.5264" width="30" height="2" rx="1" transform="rotate(-135 31.1128 32.5264)" fill={!isDesktop ? 'white' : '#00000040'} />
                </svg>}
              </button>
              <div className='lg:flex lg:max-h-[580px]'>
                <figure className='max-w-[328px] lg:max-w-[646px]'>
                  <img src={isDesktop ? setImageUrl(dataRecipes[state.recipesId].url) : setImageUrl(dataRecipes[state.recipesId].urlSm)} alt="Imagen de cocktail de autor de difentes marcas de bebidas" class/>
                </figure>
                <div className='px-4 bg-white lg:flex  flex-wrap items-center lg:w-[484px] lg:p-[61px] lg:pb-0'>
                  <p className='w-full pt-4 text-black text-[1.875rem] lg:text-5xl font-impact font-normal leading-[3.5rem] uppercase underline'>{dataRecipes[state.recipesId].title}</p>
                  <ul className='w-full uppercase text-sm space-y-8 lg:space-y-6 mt-8 pb-7 lg:text-base'>
                    {
                      dataRecipes[state.recipesId].description.split(',').map((description, index) => {
                        return <li key={index}>{description}</li>
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </Modal>
        </section>
      </motion.div>
    </BlueLayout>
  )
}
