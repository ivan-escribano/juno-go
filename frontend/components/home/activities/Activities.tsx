import React from "react";
import ActivityDescription from "./activityDescription/ActivityDescription";

const Activities = () => {
  return (
    <div className="bg-blue-900 py-8 text-white">
      <ActivityDescription title={"activates"}>
        Deliver real-time local events and activities at the touch of a button
      </ActivityDescription>
      <ActivityDescription title={"connects"}>
        Expand your social network through Juno and build long-lasting
        relationships
      </ActivityDescription>
      <div className="px-5">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668809117/juno-go/welcome-english_kvfzdv.png"
          alt=""
        />
      </div>
      <ActivityDescription title={"inspires"}>
        There's a world of events, hobbies and sports out there for you to
        explore
      </ActivityDescription>
      <ActivityDescription title={"educates"}>
        Juno gives you advice on training, nutrition & well-being from our wide
        network of experts.
      </ActivityDescription>
    </div>
  );
};

export default Activities;
