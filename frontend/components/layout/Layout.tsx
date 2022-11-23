import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import { DarkContext } from "context/DarkProvider";
import { useContext } from "react";
interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props) => {
  const { isDarkMode } = useContext(DarkContext);
  return (
    <>
      <div className={`${isDarkMode ? "dark" : ""} `}>
        {/* <NavbarMobile /> */}
        <Navbar />
        <main className="main-content h-full ">{children}</main>
        <div className="dark:bg-black">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
