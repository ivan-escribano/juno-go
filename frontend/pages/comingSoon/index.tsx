import { motion } from "framer-motion";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="dark:bg-slate-800">
      <motion.div
        className="flex w-full items-center justify-center dark:bg-slate-800 md:p-20"
        initial={{ opacity: 0.2, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      >
        <div className=" flex flex-col items-center text-xl font-bold">
          <h2 className="dark:text-white">
            Page is in progress... Coming soon!
          </h2>
          <img
            src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1669169100/juno-go/website-under-construction-page-work-progress-small-people-repare-home-internet-vector-illustration-cartoon-style-156389064-removebg-preview_nzsowc.png"
            alt="In progress"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
