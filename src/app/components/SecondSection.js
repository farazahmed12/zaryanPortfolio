"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const SecondSection = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      //   gsap.from(".videoPlayer", { x: "-140px", duration: 2, delay: 2 });
    },
    { scope: container }
  );
  return (
    <div className="w-full h-full relative " ref={container}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full videoPlayer   "
      >
        <source className="w-full h-full " src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t flex flex-row  overflow-x-hidden items-center from-black/50 to-black/50 ">
        <h1 className="text-6xl font-semibold text-white py-10  bg-black/20">
          Bringing Your Mobile App Ideas to Life with React Native
        </h1>
      </div>
    </div>
  );
};

export default SecondSection;
