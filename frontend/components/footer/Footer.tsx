import React from "react";
import Link from "next/link";
import StoreLinks from "components/storeLinks/StoreLinks";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaLocationArrow,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import FadeAnimation from "components/fadeAnimation/FadeAnimation";

const Footer = () => {
  return (
    <FadeAnimation>
      <footer className=" flex flex-col items-center bg-black p-5 text-white">
        <span className="my-5 h-0.5 w-full bg-white"></span>
        <div className="md:mt-6 md:flex md:w-full md:justify-between md:px-28">
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705728/juno-go/juno-logo_iefiqn.svg"
              alt="Juno logo"
              className="my-5 md:w-24 "
            />
            <StoreLinks />
          </div>
          <ul className="text-center text-lg font-medium md:flex">
            <div className="md:mx-8">
              <li className="my-1">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="my-1">
                <Link href={"/marketplace"}>Marketplace</Link>
              </li>
            </div>
            <div className="md:mx-8">
              <li className="my-1">
                <Link href={"/partners"}>Partners</Link>
              </li>
              <li className="my-1">
                <Link href={"/join"}>Join for free</Link>
              </li>
            </div>
          </ul>
          <div className="my-8 flex flex-col items-center md:my-0">
            <p className="mb-5 text-2xl md:text-xl">Follow us!!</p>
            <ul className="flex justify-center text-3xl md:text-2xl">
              <li className="mx-2">
                <FaFacebook />
              </li>
              <li className="mx-2">
                <FaInstagram />
              </li>
              <li className="mx-2">
                <FaLinkedin />
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-5 text-2xl">Contact us</p>
            <ul className="flex flex-col text-2xl">
              <li className="mb-7 flex items-center">
                <AiFillMail className="mr-4" />{" "}
                <p className="text-sm">juno@gmail.com</p>
              </li>
              <li className="mb-7 flex items-center">
                <FaPhoneAlt className="mr-4" />{" "}
                <p className="text-sm">987 675 434</p>
              </li>
              <li className="mb-7 flex items-center">
                <FaLocationArrow className="mr-4" />{" "}
                <p className="text-sm">Barcelona, Spain</p>
              </li>
            </ul>
          </div>
        </div>
        <p className="my-3 text-sm">
          © 2022 Juno x Ivan Escribano. All rights reserved.
        </p>
      </footer>
    </FadeAnimation>
  );
};

export default Footer;
