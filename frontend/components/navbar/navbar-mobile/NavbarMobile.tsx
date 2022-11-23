import { motion, AnimatePresence } from "framer-motion";
import { FaUserAlt, FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import Logo from "components/logo/Logo";
import { useContext } from "react";
import { ModalContext } from "context/ModalProvider";
interface Props {
  setMenuDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuDisplayed: boolean;
}
const NavbarMobile = ({ setMenuDisplay, isMenuDisplayed }: Props) => {
  const { setShowModal } = useContext(ModalContext);
  return (
    <AnimatePresence>
      {isMenuDisplayed && (
        <motion.section
          className="fixed top-0 left-0 z-30 flex h-screen w-full flex-col bg-blue-500 p-5 text-white dark:bg-black"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
        >
          {/*Dropdown menu header*/}
          <div
            style={{ flex: 0.5 }}
            className="mb-8 flex items-center justify-between"
          >
            <Logo />
            <AiOutlineCloseCircle
              onClick={() => setMenuDisplay(false)}
              className="text-4xl"
            />
          </div>
          {/* Dropdown languages */}
          <div
            className="languages mb-4 flex items-center text-xl"
            style={{ flex: 0.3 }}
          >
            <span>SV</span>
            <span className="mx-2">|</span>
            <span className="rounded-full bg-white px-2 py-1 font-medium text-blue-400">
              EN
            </span>
          </div>
          {/* Dropdown links */}
          <nav className="menu mb-5" style={{ flex: 1.9 }}>
            <ul className="flex flex-col text-3xl md:flex-row">
              <li className="mb-2 font-medium">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="my-2 font-medium">
                <Link href={"/comingSoon"}>Marketplace</Link>
              </li>
              <li className="my-2 font-medium">
                <Link href={"/comingSoon"}>Partners</Link>
              </li>
              <li className="mt-2 font-medium">
                <Link href={"/comingSoon"}>Join for free</Link>
              </li>
            </ul>
          </nav>
          {/* Dropdown separator */}
          <hr />
          {/*Dropdown options*/}
          <div
            className="nav-options flex flex-col text-xl"
            style={{ flex: 2 }}
          >
            <span
              className="mt-10 flex items-center"
              onClick={() => setShowModal(true)}
            >
              <FaUserAlt className="mr-4" />
              Login
            </span>
            <span className="mt-10 flex items-center">
              <FaRegQuestionCircle className="mr-4" />
              Help
            </span>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobile;
