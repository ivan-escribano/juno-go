import { Carousel } from "flowbite-react";
import React from "react";

const HeaderHome = () => {
  return (
    <section className="flex h-full flex-col">
      <h1 className="mb-5 px-5 text-center text-4xl font-semibold">
        Juno connects, activates and inspires.
      </h1>
      {/* Slider */}

      <Carousel slide={true} className="h-full">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705727/juno-go/header1_qw8zke.jpg"
          alt="..."
          className="w-full"
        />

        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/c_scale,h_793/v1668705726/juno-go/header2_ansvxu.jpg"
          alt="..."
          className="w-full"
        />
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705727/juno-go/header3_mqtibe.jpg"
          alt="..."
          className="w-full"
        />
      </Carousel>

      <p className="my-5 text-center text-xl font-light">
        Join our wonderful community where you will meet like-minded people and
        participate in different activities, according to your interests.
        Together we create a valuable everyday life!
      </p>
      <div className="my-5 flex justify-center">
        <button className="rounded-md bg-blue-400 py-3 px-10 text-xl font-medium text-white">
          Get started
        </button>
      </div>
      <div className="flex flex-col items-center">
        <p>Download the app now and start today!</p>
        <div className="flex items-center">
          <a href="">
            <img
              src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668807924/juno-go/ios_t5ciw8.svg"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668807922/juno-go/android_voltvc.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeaderHome;
