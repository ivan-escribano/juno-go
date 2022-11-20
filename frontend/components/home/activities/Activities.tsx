import React from "react";
import ActivityDescription from "./activityDescription/ActivityDescription";

const Activities = () => {
  return (
    <div className="bg-blue-900 py-8 text-white md:flex md:h-screen md:justify-center md:px-10">
      <div className="justify-center md:flex md:flex-col">
        <ActivityDescription title={"activates"}>
          Deliver real-time local events and activities at the touch of a button
        </ActivityDescription>
        <ActivityDescription title={"connects"}>
          Expand your social network through Juno and build long-lasting
          relationships
        </ActivityDescription>
      </div>
      <div className="px-5 md:flex md:h-full md:items-center">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668809117/juno-go/welcome-english_kvfzdv.png"
          alt="Mobile app Juno"
          className="md:h-full"
        />
      </div>
      <div className="justify-center md:flex md:flex-col">
        <ActivityDescription title={"inspires"}>
          There's a world of events, hobbies and sports out there for you to
          explore
        </ActivityDescription>
        <ActivityDescription title={"educates"}>
          Juno gives you advice on training, nutrition & well-being from our
          wide network of experts.
        </ActivityDescription>
      </div>
    </div>
  );
};

export default Activities;
