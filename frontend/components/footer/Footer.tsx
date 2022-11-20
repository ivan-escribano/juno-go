import React from "react";
import Link from "next/link";
import StoreLinks from "components/storeLinks/StoreLinks";
const Footer = () => {
  return (
    <footer className=" flex flex-col items-center bg-black p-5 text-white">
      <span className="my-5 h-0.5 w-full bg-white"></span>
      <img
        src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705728/juno-go/juno-logo_iefiqn.svg"
        alt="Juno logo"
        className="my-5"
      />
      <StoreLinks />
      <ul className="text-center text-lg font-medium">
        <li className="my-1">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="my-1">
          <Link href={"/marketplace"}>Marketplace</Link>
        </li>
        <li className="my-1">
          <Link href={"/partners"}>Partners</Link>
        </li>
        <li className="my-1">
          <Link href={"/join"}>Join for free</Link>
        </li>
      </ul>
      <p className="my-3 text-sm">
        © 2022 Juno x Ivan Escribano. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
