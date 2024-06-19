"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import { useEffect, useState } from "react";
import ForthSection from "./components/ForthSection";

export default function Home() {
  const [disableScroll, setDisableScroll] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisableScroll(false);
    }, 12000); // Disable scroll after 10 seconds

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <HeroSection />
      {!disableScroll && (
        <>
          <SecondSection />
          <ThirdSection />
          <ForthSection />
        </>
      )}
    </>
  );
}
