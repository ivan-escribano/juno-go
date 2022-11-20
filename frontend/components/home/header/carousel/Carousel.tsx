// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      spaceBetween={3}
      slidesPerView={1}
      effect="fade"
      speed={1500}
      loop={true}
      className="h-full w-full "
    >
      <SwiperSlide className="flex justify-end md:px-2 md:py-7">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705727/juno-go/header1_qw8zke.jpg"
          alt="Slider image 1"
          className="rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-end md:px-2 md:py-7">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705727/juno-go/header3_mqtibe.jpg"
          alt="Slider image 2"
          className="rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-end md:px-2 md:py-7">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705726/juno-go/header2_ansvxu.jpg"
          alt="Slider image 3"
          className="rounded-lg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
