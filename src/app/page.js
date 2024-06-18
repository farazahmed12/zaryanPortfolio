"use client";
import Image from "next/image";
import AnimatedComponent from "./components/Animated";
import HeroSection from "./components/HeroSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (document) {
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 8000);
    }
  }, []);
  return (
    <>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <SecondSection />
    </>
  );
}
