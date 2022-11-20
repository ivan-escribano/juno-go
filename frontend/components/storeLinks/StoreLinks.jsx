import React from "react";
import Link from "next/link";

const StoreLinks = () => {
  return (
    <div className="flex items-center">
      <Link href="https://apps.apple.com/se/app/still-active-community/id1465625466?l=en">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668807924/juno-go/ios_t5ciw8.svg"
          alt="App store"
        />
      </Link>
      <Link href="">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1668807922/juno-go/android_voltvc.svg"
          alt="Play store"
        />
      </Link>
    </div>
  );
};

export default StoreLinks;
