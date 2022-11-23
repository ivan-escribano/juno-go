import StoreLinks from "components/storeLinks/StoreLinks";
import { ModalContext } from "context/ModalProvider";
import { useContext } from "react";
const HeaderBody = () => {
  const { setShowModal } = useContext(ModalContext);
  return (
    <div>
      <p className="font-regular my-8 text-center text-xl md:text-left">
        Join our wonderful community where you will meet like-minded people and
        participate in different activities, according to your interests.
        Together we create a valuable everyday life!
      </p>
      <div className="my-5 flex justify-center md:justify-start">
        <button
          className="main-bg buttonHover  rounded-lg py-3 px-10 text-xl font-medium text-white"
          onClick={() => setShowModal(true)}
        >
          Get started
        </button>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <p className="my-3 text-center text-xl">
          Download the app now and start today!
        </p>
        <StoreLinks />
      </div>
    </div>
  );
};

export default HeaderBody;
