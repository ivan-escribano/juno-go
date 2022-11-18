import React from "react";
import { FaRunning } from "react-icons/fa";

const Activities = () => {
  return (
    <div className="bg-blue-900 py-5 text-white">
      <div className="single-activity my-10 flex w-full flex-col items-center">
        <FaRunning className="text-3xl text-blue-400" />
        <h2 className="text-2xl">Juno activates</h2>
        <p className="px-14">
          Deliver real-time local events and activities at the touch of a button
        </p>
      </div>
      <div className="single-activity my-10 flex w-full flex-col items-center">
        <FaRunning className="text-3xl text-blue-400" />
        <h2 className="text-2xl">Juno activates</h2>
        <p className="px-14">
          Deliver real-time local events and activities at the touch of a button
        </p>
      </div>
      <div className="px-5">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668809117/juno-go/welcome-english_kvfzdv.png"
          alt=""
        />
      </div>
      <div className="single-activity my-10 flex w-full flex-col items-center">
        <FaRunning className="text-3xl text-blue-400" />
        <h2 className="text-2xl">Juno activates</h2>
        <p className="px-14">
          Deliver real-time local events and activities at the touch of a button
        </p>
      </div>
      <div className="single-activity my-10 flex w-full flex-col items-center">
        <FaRunning className="text-3xl text-blue-400" />
        <h2 className="text-2xl">Juno activates</h2>
        <p className="px-14">
          Deliver real-time local events and activities at the touch of a button
        </p>
      </div>
    </div>
  );
};

export default Activities;
