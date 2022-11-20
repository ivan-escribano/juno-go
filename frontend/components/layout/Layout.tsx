// import Logo from "components/logo";
// import Menu from "components/menu";
// import NavbarMobile from "components/navbar/navbar-mobile/NavbarMobile";
import NavbarMobile from "components/navbar/navbar-mobile/NavbarMobile";
import Link from "next/link";
import Footer from "components/footer/Footer";
interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      {/* <NavbarMobile /> */}
      <main className="main-content h-full ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
