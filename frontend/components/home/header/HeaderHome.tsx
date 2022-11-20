import StoreLinks from "components/storeLinks/StoreLinks";
import Carousel from "./carousel/Carousel";

const HeaderHome = () => {
  return (
    <section className="flex h-full flex-col p-8">
      <h1 className="mb-5 px-5 text-center text-4xl font-semibold">
        Juno connects, activates and inspires.
      </h1>
      <Carousel />
      <div className="">
        <p className="my-5 text-center text-xl font-light">
          Join our wonderful community where you will meet like-minded people
          and participate in different activities, according to your interests.
          Together we create a valuable everyday life!
        </p>
        <div className="my-5 flex justify-center">
          <button className="rounded-md bg-blue-400 py-3 px-10 text-xl font-medium text-white">
            Get started
          </button>
        </div>
        <div className="flex flex-col items-center">
          <p>Download the app now and start today!</p>
          <StoreLinks />
        </div>
      </div>
    </section>
  );
};

export default HeaderHome;
