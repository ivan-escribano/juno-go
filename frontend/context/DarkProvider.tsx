import { createContext, useState } from "react";

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
  return (
    <DarkContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkProvider;
