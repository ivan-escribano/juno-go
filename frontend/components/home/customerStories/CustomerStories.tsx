import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
const CustomerStories = () => {
  return (
    <section className="flex h-full flex-col justify-between px-5 pt-12">
      <h2 className="mb-8 text-3xl font-semibold">Customer stories</h2>
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={1}
        speed={1000}
        loop={true}
        className="mb-10 h-full w-full"
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668820420/juno-go/testimonial4_j1nx6e.jpg"
            alt="..."
          />
          <p className="mt-8 text-3xl">
            Got fast and nice help on the website. Professional organisers!
            Recommended!
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668820418/juno-go/testimonial5_vuymfe.jpg"
            alt="..."
          />
          <p className="mt-8 text-3xl">
            Thank you Juno for making it so easy to book and get the help we
            needed.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668820417/juno-go/testimonial3_gh4k9h.jpg"
            alt="..."
          />
          <p className="mt-8 text-3xl">
            It was easy and felt safe to book and pay, appreciate that I got a
            good deal!
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CustomerStories;
