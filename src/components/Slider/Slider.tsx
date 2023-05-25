import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import s from './Slider.module.scss';

SwiperCore.use([Autoplay, Navigation]);

const Slider = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className={s.slider}
      navigation={true}
    >
      <SwiperSlide className={s.swiperSlide}>
        <img src="Image/champions.jpg" alt="Image 1" max-width="1000" height="565" />
      </SwiperSlide>
      <SwiperSlide className={s.swiperSlide}>
        <img src="Image/promo.jpg" alt="Image 2" max-width="1000" height="565" />
      </SwiperSlide>
      <SwiperSlide className={s.swiperSlide}>
        <img src="Image/nganu.jpg" alt="Image 3" max-width="1000" height="565" />
      </SwiperSlide>
      <SwiperSlide className={s.swiperSlide}>
        <img src="Image/mcgregor.jpg" alt="Image 4" max-width="1000" height="565" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
