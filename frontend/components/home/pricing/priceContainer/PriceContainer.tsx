import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
interface Props {
  price: string;
  bgColor: string;
  textColor: string;
}
const PriceContainer = ({ price, bgColor, textColor }: Props) => {
  return (
    <section className={`pricing-plans rounded-xl ${bgColor} ${textColor} p-5`}>
      <div>
        <div className="flex flex-col items-center">
          <h3 className="text-5xl font-semibold">{price} kr</h3>
          <p className=" text-2xl font-medium text-blue-500">Free</p>
          <p>Month</p>
        </div>
        <div>
          <div className="flex p-5">
            <FaRegCheckCircle className="mr-5 flex-1 text-4xl" />
            <p style={{ flex: 11 }}>
              Take advantage of the entire Junoversum that offers you a valuable
              and active everyday life
            </p>
          </div>
          <div className="flex p-5">
            <FaRegCheckCircle className="mr-5 flex-1 text-4xl" />
            <p style={{ flex: 11 }}>
              Take advantage of exclusive offers and inspiring articles from
              hand-picked partners and experts!
            </p>
          </div>
          <div className="flex p-5">
            <FaRegCheckCircle className="mr-5 flex-1 text-4xl" />
            <p style={{ flex: 11 }}>
              Meet like-minded people in the Juno community, both in the app and
              on the website!
            </p>
          </div>
          <div className="flex p-5">
            <FaRegCheckCircle className="mr-5  flex-1 text-4xl" />
            <p style={{ flex: 11 }}>
              Get access to a marketplace tailored to your needs!
            </p>
          </div>
          <div className="flex p-5">
            <FaRegCheckCircle className="mr-5 flex-1 text-4xl" />
            <p style={{ flex: 11 }}>Pay your membership monthly by card!</p>
          </div>
          <div className="flex justify-center">
            <button className="rounded-lg border-2 border-blue-400 px-10 py-2">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceContainer;
