import { createContext, useState } from "react";

interface IShowModal {
  isModalShow: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Props {
  children: JSX.Element;
}
export const ModalContext = createContext<IShowModal>({
  isModalShow: false,
  setShowModal: () => null,
});

const ModalProvider = ({ children }: Props) => {
  const [isModalShow, setShowModal] = useState<boolean>(false);
  return (
    <ModalContext.Provider value={{ isModalShow, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
