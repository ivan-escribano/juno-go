import React, { useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { login, signup } from "api/api";
import toast from "react-hot-toast";
import {
  RiCloseCircleFill,
  RiLockPasswordFill,
  RiUser3Fill,
} from "react-icons/ri";
import { ModalContext } from "context/ModalProvider";
import { AnimatePresence, motion } from "framer-motion";
const AuthModal = () => {
  const { isModalShow, setShowModal } = useContext(ModalContext);
  const [typeAuth, setAuthType] = useState("login");
  const loginMutation = useMutation(login, {
    onSuccess: (data) => {
      toast.success(data);
      console.log(data);
    },
    onError: (error) => {
      const err = error as any;
      toast.error(err.response.data.message);
    },
  });
  const registerMutation = useMutation(signup, {
    onSuccess: (data) => {
      toast.success(data);
    },
    onError: (error) => {
      const err = error as any;
      if (
        err.response.data ===
        "ErrorParseError: 202 Account already exists for this username."
      )
        toast.error("Account already exists for this username.");
      else {
        toast.error(err.response.data);
      }
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    e.preventDefault();
    if (typeAuth === "login") {
      loginMutation.mutate(data);
    } else {
      registerMutation.mutate(data);
    }
    setShowModal(false);
  };

  return (
    <>
      <AnimatePresence>
        {isModalShow && (
          <section
            className=" fixed top-0 z-50 flex  h-screen w-screen items-center justify-center"
            style={{ backgroundColor: "#000000c4" }}
          >
            <motion.div
              className="relative  flex flex-col rounded-md bg-white px-12 py-8"
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: -300 }}
              exit={{ opacity: 0, y: -300, transition: { duration: 0.3 } }}
            >
              <RiCloseCircleFill
                className="absolute top-5 right-5 cursor-pointer text-2xl"
                onClick={() => setShowModal(false)}
              />
              <h2 className="mb-4 text-3xl font-medium text-black">
                {" "}
                {typeAuth === "login" ? "Login" : "Register"}
              </h2>
              <form
                className="flex flex-col justify-between "
                onSubmit={handleSubmit}
              >
                <label htmlFor="" className="my-2 flex flex-col">
                  <span className="text-md mb-1 flex items-center">
                    <RiUser3Fill className="mr-1" />
                    Username:
                  </span>
                  <input
                    type="text"
                    name="username"
                    placeholder="ivan-escribano"
                    required
                  />
                </label>
                <label htmlFor="" className="my-2 flex flex-col">
                  <span className="text-md mb-1 flex items-center">
                    <RiLockPasswordFill className="mr-1" />
                    Password:
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    required
                  />
                </label>
                <div className="mt-4 flex justify-center">
                  <button
                    className=" rounded-md bg-red-500 px-10 py-1 text-white"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="main-bg ml-2 rounded-md px-10 py-1 text-white"
                    type="submit"
                  >
                    {typeAuth === "login" ? "Login" : "Register"}
                  </button>
                </div>
              </form>
              <div className="mt-5">
                {typeAuth === "login" ? (
                  <button onClick={() => setAuthType("register")}>
                    Don't have an account?{" "}
                    <span className="main-text font-semibold">
                      {" "}
                      click here!
                    </span>
                  </button>
                ) : (
                  <button onClick={() => setAuthType("login")}>
                    Already have an account
                    <span className="main-text font-semibold">
                      {" "}
                      click here!
                    </span>
                  </button>
                )}
              </div>
            </motion.div>
          </section>
        )}
      </AnimatePresence>
    </>
  );
};

export default AuthModal;