import React from "react";
import {
  FaRunning,
  FaHandsHelping,
  FaLightbulb,
  FaBookOpen,
} from "react-icons/fa";
interface Props {
  children: string;
  title: string;
}
interface ITypeIcon {
  activates: JSX.Element;
  connects: JSX.Element;
  inspires: JSX.Element;
  educates: JSX.Element;
}
const ActivityDescription = ({ children, title }: Props) => {
  const typeIcon: ITypeIcon = {
    activates: <FaRunning />,
    connects: <FaHandsHelping />,
    inspires: <FaLightbulb />,
    educates: <FaBookOpen />,
  };
  return (
    <div className="single-activity my-10 flex w-full flex-col items-center">
      <div className="text-3xl text-blue-400">
        {typeIcon[title as keyof ITypeIcon]}
      </div>
      <h2 className="text-2xl">Juno {title}</h2>
      <p className="px-14 text-center">{children}</p>
    </div>
  );
};

export default ActivityDescription;
