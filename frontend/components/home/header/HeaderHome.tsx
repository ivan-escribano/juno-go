import StoreLinks from "components/storeLinks/StoreLinks";
import Carousel from "./carousel/Carousel";
import HeaderBody from "./headerBody/HeaderBody";

const HeaderHome = () => {
  return (
    <section className="flex h-full flex-col p-6 md:h-screen md:flex-row md:items-center md:px-32">
      <div className="md:flex md:flex-col">
        <h1 className="mb-5 px-5 text-center text-4xl font-semibold md:p-0 md:text-left md:text-6xl">
          Juno connects, activates and inspires.
        </h1>
        <div className="hidden md:flex">
          <HeaderBody />
        </div>
      </div>
      <Carousel />
      <div className="md:hidden">
        <HeaderBody />
      </div>
    </section>
  );
};

export default HeaderHome;
