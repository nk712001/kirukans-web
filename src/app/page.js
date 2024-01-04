import Hero from "../../Components/Hero";
import OurInitiative from "../../Components/OurInitiative";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <OurInitiative />
    </RootLayout>
  );
}
