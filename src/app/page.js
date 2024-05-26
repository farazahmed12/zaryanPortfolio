import Image from "next/image";
import AnimatedComponent from "./components/Animated";
import HeroSection from "./components/HeroSection";
import SecondSection from "./components/SecondSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecondSection />
    </>
  );
}
