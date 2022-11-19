// import Logo from "components/logo";
// import Menu from "components/menu";
// import NavbarMobile from "components/navbar/navbar-mobile/NavbarMobile";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserAlt, FaRegQuestionCircle, FaAlignJustify } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div
        className={`${showMenu ? "hidden" : "flex"} justify-between text-3xl`}
      >
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705728/juno-go/juno-logo_iefiqn.svg"
          alt="Juno logo"
          className="h-16"
        />
        <button onClick={() => setShowMenu(true)}>
          <FaAlignJustify />
        </button>
      </div>
      <header
        className={`absolute ${
          showMenu ? "flex" : "hidden"
        }  h-screen w-screen  flex-col bg-blue-500 p-4 text-white`}
      >
        <div className="header-top flex justify-between " style={{ flex: 0.5 }}>
          <img
            src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705728/juno-go/juno-logo_iefiqn.svg"
            alt="Juno logo"
            className="h-16"
          />
          <button
            className="close mt-4 flex text-4xl"
            onClick={() => setShowMenu(false)}
          >
            <AiFillCloseCircle />
          </button>
        </div>
        <div
          className="languages flex items-center text-xl"
          style={{ flex: 0.3 }}
        >
          <span>SV</span>
          <span className="mx-2">|</span>
          <span className="rounded-full bg-white px-2 py-1 text-blue-400">
            EN
          </span>
        </div>
        <nav className="menu" style={{ flex: 1.2 }}>
          <ul className="flex flex-col text-3xl md:flex-row">
            <li className="mb-2">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="my-2">
              <Link href={"/marketplace"}>Marketplace</Link>
            </li>
            <li className="my-2">
              <Link href={"/partners"}>Partners</Link>
            </li>
            <li className="mt-2">
              <Link href={"/join"}>Join for free</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <div className="nav-options flex flex-col text-xl" style={{ flex: 2 }}>
          <span className="mt-10 flex items-center">
            <FaUserAlt className="mr-4" />
            Login
          </span>
          <span className="mt-10 flex items-center">
            <FaRegQuestionCircle className="mr-4" />
            Help
          </span>
        </div>
      </header>
      <main className="main-content h-full ">{children}</main>
      <footer className=" flex flex-col items-center bg-black p-5 text-white">
        <span className="my-5 h-0.5 w-full bg-white"></span>
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668705728/juno-go/juno-logo_iefiqn.svg"
          alt=""
          className="my-5"
        />

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
    </>
  );
};

export default Layout;
