import StoreLinks from "components/storeLinks/StoreLinks";
import { motion } from "framer-motion";
import Carousel from "./carousel/Carousel";
import HeaderBody from "./headerBody/HeaderBody";

const HeaderHome = () => {
  return (
    <motion.section
      className="flex h-full flex-col p-6 dark:bg-black dark:text-white md:h-screen md:flex-row md:items-center md:px-32"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
    >
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
    </motion.section>
  );
};

export default HeaderHome;
