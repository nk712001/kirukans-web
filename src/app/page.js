import Events from "../../Components/Events";
import Hero from "../../Components/Hero";
import JoinUs from "../../Components/JoinUs";
import OurInitiative from "../../Components/OurInitiative";
import OurInsights from "../../Components/OurInsights/indes";
// import RootLayout from "./layout";

export default function Home() {
  return (
    <>
      <Hero />
      <OurInitiative />
      <JoinUs />
      <Events />
      <OurInsights />
    </>
  );
}
