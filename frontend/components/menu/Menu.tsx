import React from "react";
import Link from "next/link";
const Menu = () => {
  return (
    <nav className="menu ">
      <ul className="flex flex-col md:flex-row ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/marketplace"}>Marketplace</Link>
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
