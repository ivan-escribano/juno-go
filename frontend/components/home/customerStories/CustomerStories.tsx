import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const CustomerStories = () => {
  return (
    <section className="flex h-full flex-col justify-between px-5 py-12 md:px-64">
      <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
        Customer stories
      </h2>
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={1}
        speed={1000}
        loop={true}
        effect="fade"
        className="mb-10 h-full w-full"
      >
        <SwiperSlide className="px md:flex md:items-center">
          <img
            src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668820420/juno-go/testimonial4_j1nx6e.jpg"
            alt="Customer stories 1"
            className="rounded-md md:order-2"
          />
          <p className="mt-8 mr-3 text-3xl md:order-1">
            Got fast and nice help on the website. Professional organisers!
            Recommended!
          </p>
        </SwiperSlide>
        <SwiperSlide className="px md:flex md:items-center">
          <img
            src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668820418/juno-go/testimonial5_vuymfe.jpg"
            alt="Customer stories 2"
            className="rounded-md md:order-2"
          />
          <p className="mt-8 mr-3 text-3xl md:order-1">
            Thank you Juno for making it so easy to book and get the help we
            needed.
          </p>
        </SwiperSlide>
        <SwiperSlide className="px md:flex md:items-center">
          <img
            src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668820417/juno-go/testimonial3_gh4k9h.jpg"
            alt="Customer stories 3"
            className="rounded-md md:order-2"
          />
          <p className="mt-8 mr-3 text-3xl md:order-1">
            It was easy and felt safe to book and pay, appreciate that I got a
            good deal!
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CustomerStories;
