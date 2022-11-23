import { useContext } from "react";
import Link from "next/link";
import { ModalContext } from "context/ModalProvider";

const Menu = () => {
  const { setShowModal } = useContext(ModalContext);
  return (
    <nav className="menu ">
      <ul className="hidden text-lg md:flex md:flex-row md:justify-between">
        <li>
          <button
            className="buttonHover main-bg rounded-md px-5 py-1 font-semibold text-white"
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        </li>
        <li className="cool-link">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="cool-link">
          <Link href={"/comingSoon"}>Partners</Link>
        </li>
        <li className="cool-link">
          <Link href={"/comingSoon"}>Join for free</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
