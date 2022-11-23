import StoreLinks from "components/storeLinks/StoreLinks";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import PriceContainer from "./priceContainer/PriceContainer";

const Pricing = () => {
  return (
    <section className="bg-blue-200 p-4 dark:bg-black dark:text-white">
      <div className="pricing-content my-10 flex flex-col items-center px-10  text-center">
        <h1 className="px-2 text-3xl font-medium md:text-5xl">
          Let’s get you started with Juno!
        </h1>
        <div className="md:my-5 md:w-96">
          <p className="mt-3 md:text-xl md:font-normal">
            Your membership gives you access to Juno's wonderful community where
            you can meet new like-minded people and exciting activities, as well
            as receive exclusive offers from our partners.
          </p>
          <p className="my-5 md:w-96 md:text-xl md:font-normal">
            At the end of your trial period, you can choose to pay monthly or
            annually. See below what you get for your membership
          </p>
        </div>
        <StoreLinks />
      </div>
      <div className="md:mx-36 md:flex">
        <PriceContainer
          price="99"
          bgColor="bg-white dark:bg-slate-600 dark:text-white"
          textColor="text-black"
          feeTime="Month"
        />
        <PriceContainer
          price="999"
          bgColor="bg-blue-900 "
          textColor="text-white"
          feeTime="Year"
        />
      </div>
    </section>
  );
};

export default Pricing;
