// import Logo from "components/logo";
// import Menu from "components/menu";
// import NavbarMobile from "components/navbar/navbar-mobile/NavbarMobile";
// import NavbarMobile from "components/navbar/navbar-mobile/NavbarMobile";
// import Link from "next/link";
import Footer from "components/footer/Footer";
import { DarkContext } from "context/DarkProvider";
import { useContext } from "react";
interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props) => {
  const { isDarkMode } = useContext(DarkContext);
  return (
    <>
      <div className={`${isDarkMode ? "dark" : ""}`}>
        {/* <NavbarMobile /> */}
        <main className="main-content h-full ">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
