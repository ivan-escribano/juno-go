// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper";
import { Autoplay } from "swiper";
import "swiper/css";
const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={1}
      speed={1000}
      loop={true}
      className="h-full w-full"
    >
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705727/juno-go/header1_qw8zke.jpg"
          className="rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705727/juno-go/header3_mqtibe.jpg"
          alt=""
          className="rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705726/juno-go/header2_ansvxu.jpg"
          alt=""
          className="rounded-lg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
