import { Carousel } from "flowbite-react";
import React from "react";

const CustomerStories = () => {
  return (
    <section className="flex h-full flex-col justify-between px-5 pt-12">
      <h2 className="mb-8 text-3xl font-semibold">Customer stories</h2>
      <Carousel slide={true} className="h-full">
        <div className="h-full">
          <img
            src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668820420/juno-go/testimonial4_j1nx6e.jpg"
            alt="..."
          />
          <p className="mt-8 text-3xl">
            Got fast and nice help on the website. Professional organisers!
            Recommended!
          </p>
        </div>
        <div className="h-full">
          <img
            src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668820418/juno-go/testimonial5_vuymfe.jpg"
            alt="..."
          />
          <p className="mt-8 text-3xl">
            Thank you Juno for making it so easy to book and get the help we
            needed.
          </p>
        </div>
        <div className="h-full">
          <img
            src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668820417/juno-go/testimonial3_gh4k9h.jpg"
            alt="..."
          />
          <p className="mt-8 text-3xl">
            It was easy and felt safe to book and pay, appreciate that I got a
            good deal!
          </p>
        </div>
      </Carousel>
    </section>
  );
};

export default CustomerStories;
