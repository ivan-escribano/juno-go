import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="bg-blue-200 p-3">
      <div className="pricing-content flex flex-col px-12 text-center">
        <h1 className="px-2 text-3xl">Let’s get you started with Juno!</h1>
        <p>
          Your membership gives you access to Juno's wonderful community where
          you can meet new like-minded people and exciting activities, as well
          as receive exclusive offers from our partners.
        </p>
        <p>
          At the end of your trial period, you can choose to pay monthly or
          annually. See below what you get for your membership
        </p>
        <div className="flex items-center justify-center">
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
      <section className="pricing-plans rounded-xl bg-slate-50 p-5">
        <div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-semibold">99 kr</h3>
            <p className=" text-2xl font-medium text-blue-500">Free</p>
            <p>Month</p>
          </div>
          <div>
            <div className="flex p-5">
              <FaRegCheckCircle className="mr-5 text-4xl" />
              <p>
                {" "}
                Take advantage of the entire Junoversum that offers you a
                valuable and active everyday life
              </p>
            </div>
            <div className="flex p-5">
              <FaRegCheckCircle className="mr-5 text-4xl" />
              <p>
                {" "}
                Take advantage of the entire Junoversum that offers you a
                valuable and active everyday life
              </p>
            </div>
            <div className="flex p-5">
              <FaRegCheckCircle className="mr-5 text-4xl" />
              <p>
                {" "}
                Take advantage of the entire Junoversum that offers you a
                valuable and active everyday life
              </p>
            </div>
            <div className="flex p-5">
              <FaRegCheckCircle className="mr-5 text-4xl" />
              <p>
                {" "}
                Take advantage of the entire Junoversum that offers you a
                valuable and active everyday life
              </p>
            </div>
            <div className="flex p-5">
              <FaRegCheckCircle className="mr-5 text-4xl" />
              <p>
                {" "}
                Take advantage of the entire Junoversum that offers you a
                valuable and active everyday life
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Pricing;
