import { createContext, useEffect, useState } from "react";

interface IDarkMode {
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Props {
  children: JSX.Element;
}
export const DarkContext = createContext<IDarkMode>({
  isDarkMode: false,
  setDarkMode: () => null,
});
const DarkProvider = ({ children }: Props) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  //Next js is SSR so we need to get localstorage when the component itself is rendered/mounted in the client
  useEffect(() => {
    const darkType = localStorage.getItem("dark") === "true" ? true : false;
    setDarkMode(darkType);
  }, []);
  return (
    <DarkContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkProvider;
