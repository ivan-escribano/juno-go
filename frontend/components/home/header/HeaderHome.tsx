import StoreLinks from "components/storeLinks/StoreLinks";
import Carousel from "./carousel/Carousel";

const HeaderHome = () => {
  return (
    <section className="flex h-full flex-col p-6">
      <h1 className="mb-5 px-5 text-center text-4xl font-semibold">
        Juno connects, activates and inspires.
      </h1>
      <Carousel />
      <div>
        <p className="font-regular my-8 text-center text-xl">
          Join our wonderful community where you will meet like-minded people
          and participate in different activities, according to your interests.
          Together we create a valuable everyday life!
        </p>
        <div className="my-5 flex justify-center">
          <button className="main-bg rounded-lg py-3 px-10 text-xl font-medium text-white">
            Get started
          </button>
        </div>
        <div className="flex flex-col items-center">
          <p className="my-3 text-center text-xl">
            Download the app now and start today!
          </p>
          <StoreLinks />
        </div>
      </div>
    </section>
  );
};

export default HeaderHome;
