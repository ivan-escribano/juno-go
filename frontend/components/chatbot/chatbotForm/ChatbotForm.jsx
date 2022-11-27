import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
const ChatbotForm = (props) => {
  const { setOpened } = props;

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    const { steps } = props;
    const { name, emailInput: email, messageInput: message } = steps;
    setFormValues({
      name: name.value,
      email: email.value,
      message: message.value,
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://formsubmit.co/ajax/ivanescribano1998@gmail.com", {
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
      })
      .then(() => toast.success("Email sended!", { position: "bottom-left" }))
      .catch((error) => toast.error(error));
    setOpened(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* Custom form values */}
      <input type="hidden" name="_template" value="table" />
      {/* Actual form values */}
      <label htmlFor="name" className="my-2  flex flex-col">
        <span>Name:</span>
        <input
          name="name"
          type="text"
          className="rounded-sm border-2 border-black p-1 px-2"
          onChange={(e) =>
            setFormValues((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
          id="name"
          value={formValues.name}
          required
        />
      </label>
      <label htmlFor="email" className="my-2 flex  flex-col">
        <span>Email:</span>
        <input
          name="email"
          type="email"
          className="rounded-sm border-2 border-black p-1 px-2"
          onChange={(e) =>
            setFormValues((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
          id="email"
          value={formValues.email}
          required
        />
      </label>
      <label htmlFor="message" className=" my-2">
        <span>Message:</span>
        <textarea
          name="message"
          className="w-full rounded-sm border-2 border-black p-1 px-2"
          onChange={(e) =>
            setFormValues((prev) => {
              return { ...prev, message: e.target.value };
            })
          }
          id="message"
          value={formValues.message}
          required
        ></textarea>
      </label>
      <div className="mt-3 flex justify-end">
        <button
          className="main-bg buttonHover rounded-md px-3 py-1 text-white"
          type="submit"
        >
          Send email
        </button>
      </div>
    </form>
  );
};

export default ChatbotForm;
