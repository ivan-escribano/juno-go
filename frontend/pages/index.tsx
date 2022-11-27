import AuthModal from "components/authModal/AuthModal";
import FadeAnimation from "components/fadeAnimation/FadeAnimation";
import Activities from "components/home/activities/Activities";
import CustomerStories from "components/home/customerStories/CustomerStories";
import HeaderHome from "components/home/header/HeaderHome";
import Pricing from "components/home/pricing/Pricing";
import Loader from "components/loader/Loader";
import ChatbotComponent from "components/chatbot/ChatbotComponent";
export default function Home() {
  return (
    <>
      <ChatbotComponent />
      <Loader></Loader>
      <AuthModal></AuthModal>
      <div className="dark:bg-black">
        <HeaderHome />
        <FadeAnimation>
          <Activities />
        </FadeAnimation>
        <FadeAnimation>
          <Pricing />
        </FadeAnimation>
        <FadeAnimation>
          <CustomerStories />
        </FadeAnimation>
      </div>
    </>
  );
}
