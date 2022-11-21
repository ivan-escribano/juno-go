import Logo from "components/logo/Logo";
import Menu from "components/menu/Menu";
import React from "react";
import Toggle from "components/toggle/Toggle";
import NavbarMobile from "./navbar-mobile/NavbarMobile";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuDisplayed, setMenuDisplay] = useState<boolean>(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0.2, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        className="sticky top-0 z-20 flex w-full items-center justify-between bg-slate-50 p-5 dark:bg-sky-800 dark:text-white md:px-28"
        style={{ top: "0.01" }}
      >
        <div className="md:flex-1">
          <Logo></Logo>
        </div>
        {/* Menu desktop */}
        <div className=" md:flex-1">
          <Menu></Menu>
        </div>
        <div className="flex items-center">
          <div className="mr-5 md:ml-16 md:flex">
            <Toggle />
          </div>
          <div className="text-3xl md:hidden">
            <AiOutlineMenu onClick={() => setMenuDisplay(true)} />
          </div>
        </div>
      </motion.div>
      <NavbarMobile
        setMenuDisplay={setMenuDisplay}
        isMenuDisplayed={isMenuDisplayed}
      />
    </>
  );
};

export default Navbar;
