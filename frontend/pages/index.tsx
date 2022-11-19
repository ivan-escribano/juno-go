import Activities from "components/home/activities/Activities";
import CustomerStories from "components/home/customerStories/CustomerStories";
import HeaderHome from "components/home/header/HeaderHome";
import Pricing from "components/home/pricing/Pricing";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <Activities />
      <Pricing />
      <CustomerStories />
    </>
  );
}
