import { useContext } from "react";
import { Ring } from "@uiball/loaders";
import { LoaderContext } from "context/LoaderProvider";

const Loader = () => {
  const { isLoaderShow } = useContext(LoaderContext);
  return (
    <>
      {isLoaderShow && (
        <div
          className="fixed top-0 z-50 flex h-screen w-full flex-col items-center justify-center  text-4xl"
          style={{ backgroundColor: "#000000c4" }}
        >
          <Ring size={100} lineWeight={5} speed={2} color="white" />
          <p className="mt-10 font-medium text-white">Loading...</p>
        </div>
      )}
    </>
  );
};

export default Loader;
