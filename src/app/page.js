import Image from "next/image";
import AnimatedComponent from "./components/Animated";
import HeroSection from "./components/HeroSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
    </>
  );
}
