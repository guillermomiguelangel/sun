import { motion } from "framer-motion";
import { BlueLayout } from '../layout/BlueLayout';
import { Slider } from '../components/Slider';
import { SwiperSlide } from "swiper/react";
import { useMediaSun } from "../hooks/useMediaSun";

import imgHatSm from "../assets/img_hat-sm.png";
import imgHat from "../assets/img_hat-gift.png";
import imgTables from "../assets/img_tables-gift.png";
import icBottles from "../assets/img_bottles-gift.png";
import { Link } from "react-router-dom";

export const GiftsPage = () => {
  const {isDesktop} = useMediaSun();
  return (
    <BlueLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative sliderGifts">
          <div className="text-center text-white lg:max-w-[1200px] mx-auto mb-8">
            <h2 className="lg:text-base text-sm tracking-[0.15rem] uppercase mt-6 lg:mt-0">CONOCE LOS PREMIOS</h2>
            <h1 className="font-impact lg:text-5xl text-[2.5rem] uppercase lg:mt-4 lg:mb-6 mt-3 mb-4">un viaje para 4 personas</h1>
            <h3 className="lg:text-xl text-base lg:max-w-[85%] mx-auto mb-7 px-5 lg:px-0">Te sorprendemos con un viaje de un fin de semana a la playa, recibe un kit de productos de bienvenida, hospédate en un cómodo hotel y disfruta de una deliciosa comida para 4 personas en un restaurante de la zona.</h3>
            <Slider>
              <SwiperSlide>
                <div id="item1" className="h-[17.56rem] lg:h-[495px] gradient-slider rounded-[0.25rem] carousel-item w-full bg-cover relative bg-[url(../assets/img_maitencillo.jpg)]">
                  <p className='absolute text-white uupercase font-bold lg:text-2xl text-[0.93rem] top-6 left-4 lg:left-10'>MAINTENCILLO</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="item2" className="h-[17.56rem] lg:h-[495px] gradient-slider rounded-[0.25rem] carousel-item w-full bg-cover relative bg-[url(../assets/img_serena.jpg)]">
                  <p className='absolute text-white uupercase font-bold lg:text-2xl text-[0.93rem] top-6 left-4 lg:left-10'>LA SERENA</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="item3" className="h-[17.56rem] lg:h-[495px] gradient-slider rounded-[0.25rem] carousel-item w-full bg-cover relative bg-[url(../assets/img_pucon.jpg)]">
                  <p className='absolute text-white uupercase font-bold lg:text-2xl text-[0.93rem] top-6 left-4 lg:left-10'>PUCÓN</p>
                </div>
              </SwiperSlide>
            </Slider>
            <div className="relative">
              <figure className='hidden lg:block -top-[130px] left-10 absolute'>
                <img src={icBottles} alt="Botellas de bebidas alcoholicas" className="animate__animated animate__fadeInUp lg:w-[348px]" />
              </figure>
              <Link to={'/recipes'}>
                <button className="button w-[18.6rem] my-10 z-10 relative">DESCUBRE NUESTRAS RECETAS</button>
              </Link>
            </div>
          </div>
          <div className='absolute bottom-0 right-0 z-1 animate__animated animate__fadeInRightBig'>
            <figure className="hidden lg:block"><img src={isDesktop ? imgHat : imgHatSm} alt="Imagen de sombrero con anteojos" className='absolute -right-[2px] lg:w-[12rem] -bottom-[38px]' /></figure>
            <figure>
              <img src={imgTables} alt="Imagen de tablas de surf" className='w-[9.3rem] lg:w-[17.25rem] trans' />
            </figure>
          </div>
        </div>
      </motion.div>
    </BlueLayout>
  )
}
