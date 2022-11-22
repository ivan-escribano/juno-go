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
            className="main-bg rounded-md px-5 py-1 font-semibold text-white"
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        </li>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/partners"}>Partners</Link>
        </li>
        <li>
          <Link href={"/join"}>Join for free</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
