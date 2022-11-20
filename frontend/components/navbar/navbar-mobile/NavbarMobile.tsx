import { useState } from "react";
import Hamburger from "hamburger-react";
import { motion, useAnimation } from "framer-motion";
import { FaUserAlt, FaRegQuestionCircle, FaAlignJustify } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
const NavbarMobile = () => {
  const [isMenuOpen, isSetMenuOpen] = useState(false);
  const control = useAnimation();
  const variantMenu = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 100,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };
  const variantParent = {
    hidden: {
      height: 0,
    },
    visible: {
      height: "100vh",
      transition: {
        when: "beforeChildren",
      },
    },
  };
  const handleMenu = () => {
    isSetMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <button onClick={() => handleMenu()}>
        <Hamburger></Hamburger>
      </button>
      <motion.section
        variants={variantParent}
        animate={isMenuOpen ? "hidden" : "visible"}
      >
        <motion.div
          variants={variantMenu}
          animate={isMenuOpen ? "hidden" : "visible"}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          numquam cumque delectus facilis quam maiores omnis! Molestias placeat
          dolor porro.
        </motion.div>
      </motion.section>
    </>
  );
};

export default NavbarMobile;
