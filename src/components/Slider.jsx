import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export const Slider = ({children}) => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        className="relative z-0"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
          {children}
      </Swiper>
    </>
  )
}
