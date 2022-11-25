import { createContext, useState } from "react";

interface IShowLoader {
  isLoaderShow: boolean;
  setLoaderShow: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Props {
  children: JSX.Element;
}
export const LoaderContext = createContext<IShowLoader>({
  isLoaderShow: false,
  setLoaderShow: () => null,
});
const LoaderProvider = ({ children }: Props) => {
  const [isLoaderShow, setLoaderShow] = useState<boolean>(false);
  return (
    <LoaderContext.Provider value={{ isLoaderShow, setLoaderShow }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
