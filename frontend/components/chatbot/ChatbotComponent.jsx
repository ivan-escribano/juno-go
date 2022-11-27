import ChatBot from "react-simple-chatbot";
import { useState, useContext } from "react";
import ChatbotForm from "./chatbotForm/ChatbotForm";
import { DarkContext } from "context/DarkProvider";
const ChatbotComponent = () => {
  const { isDarkMode } = useContext(DarkContext);
  const [opened, setOpened] = useState(false);
  const toggleFloating = ({ opened }) => {
    setOpened(opened);
  };
  return (
    <div className="z-50">
      <ChatBot
        headerTitle="Juno chatbot 🤖"
        opened={opened}
        style={{ backgroundColor: `${isDarkMode ? "black" : "white"}` }}
        toggleFloating={toggleFloating}
        floating={true}
        className="chatbot-react"
        speechSynthesis={{ enable: `${opened ? true : false}`, lang: "en" }}
        steps={[
          {
            id: "welcome",
            message: "Welcome to Juno, you want to know about us?",
            trigger: "knowMoreAbout",
          },
          {
            id: "knowMoreAbout",
            options: [
              { value: "Yes", label: "Yes", trigger: "details" },
              { value: "No", label: "No", trigger: "noDetails" },
            ],
          },
          {
            id: "noDetails",
            message: "Don't worry. if you want to know more we are here!",
            end: true,
          },
          {
            id: "details",
            message:
              "In Juno you will meet like-minded people and participate in different activities according to your interests. Want to know more?",
            trigger: "detailsOptions",
          },
          {
            id: "detailsOptions",
            options: [
              { value: "activates", label: "activates", trigger: "activates" },
              { value: "inspires", label: "inspires", trigger: "inspires" },
              { value: "connects", label: "connects", trigger: "connects" },
              { value: "educates", label: "educates", trigger: "educates" },
              {
                value: "contact us",
                label: "contact us",
                trigger: "contactUs",
              },
            ],
          },
          {
            id: "activates",
            message:
              "Juno activates, deliver real-time local events and activities at the touch of a button.",
            trigger: "detailsOptions",
          },
          {
            id: "inspires",
            message:
              "Juno inspires, there's a world of events, hobbies and sports out there for you to explore",
            trigger: "detailsOptions",
          },
          {
            id: "connects",
            message:
              "Juno connects, expand your social network through Juno and build long-lasting relationships",
            trigger: "detailsOptions",
          },
          {
            id: "educates",
            message:
              "Juno educates , Juno gives you advice on training, nutrition & well-being from our wide network of experts.",
            trigger: "detailsOptions",
          },
          {
            id: "contactUs",
            message:
              "Perfect!! we are exited to know more about you, first tell me your name: ",
            trigger: "name",
          },
          {
            id: "name",
            placeholder: "Enter you name...",
            user: true,
            trigger: "emailText",
          },
          {
            id: "emailText",
            message:
              "Thanks {previousValue}!! let me know also your email so we can connect: ",
            trigger: "emailInput",
          },
          {
            id: "emailInput",
            placeholder: "Enter you email...",
            user: true,
            validator: (value) => {
              if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
              } else {
                return "Please enter a valid email.";
              }
            },
            trigger: "messageText",
          },
          {
            id: "messageText",
            message:
              "Last but not the least, if you want to leave us a message, we would love to read your message: ",
            trigger: "messageInput",
          },
          {
            id: "messageInput",
            placeholder: "Enter you message...",
            user: true,
            trigger: "endMessage",
          },
          {
            id: "endMessage",
            message:
              "Click submit if you are ok with the values entered! we will contact you as soon as possible",
            trigger: "chatbotForm",
          },
          {
            id: "chatbotForm",
            component: <ChatbotForm setOpened={setOpened} />,
            hideInput: true,
            end: true,
          },
        ]}
      />
    </div>
  );
};

export default ChatbotComponent;
