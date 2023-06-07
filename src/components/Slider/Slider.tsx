import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import s from './Slider.module.scss';

SwiperCore.use([Autoplay, Navigation]);

const Slider = () => {
  const sliders = [
    { src: 'Image/champions.jpg', alt: 'champions' },
    { src: 'Image/promo.jpg', alt: 'promo' },
    { src: 'Image/nganu.jpg', alt: 'nganu' },
    { src: 'Image/mcgregor.jpg', alt: 'mcgregor' },
  ];

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
      {sliders.map((slide, index) => (
        <SwiperSlide key={index} className={s.swiperSlide}>
          <img src={slide.src} alt={slide.alt} style={{ maxWidth: '1000px', height: '565px' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
