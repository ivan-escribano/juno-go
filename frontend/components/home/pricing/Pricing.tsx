import StoreLinks from "components/storeLinks/StoreLinks";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import PriceContainer from "./priceContainer/PriceContainer";

const Pricing = () => {
  return (
    <section className="bg-blue-200 p-4 ">
      <div className="pricing-content my-10 flex  flex-col px-10 text-center">
        <h1 className="px-2 text-3xl font-medium">
          Let’s get you started with Juno!
        </h1>
        <p className="mt-3">
          Your membership gives you access to Juno's wonderful community where
          you can meet new like-minded people and exciting activities, as well
          as receive exclusive offers from our partners.
        </p>
        <p className="my-5">
          At the end of your trial period, you can choose to pay monthly or
          annually. See below what you get for your membership
        </p>
        <StoreLinks />
      </div>
      <PriceContainer price="99" bgColor="bg-white" textColor="text-black" />
      <PriceContainer
        price="999"
        bgColor="bg-blue-900"
        textColor="text-white"
      />
    </section>
  );
};

export default Pricing;
