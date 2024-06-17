"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const SecondSection = () => {
  const container2 = useRef(null);
  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".texting",
          start: "top top",
          end: "bottom 20%",
          scrub: 5,
          pin: true,
        },
      });

      // Text Video
      tl.to(
        ".texting",

        {
          scale: 2,
          fontSize: "14vw",
          translateX: "-240%",
          ease: "power1.inOut",
          yoyo: true,
        }
      );
    },
    { scope: container2 }
  );
  return (
    <div
      className="w-full h-screen z-10  relative overflow-hidden "
      ref={container2}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover videoPlayer   "
      >
        <source className="w-full h-full " src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-t flex flex-row  overflow-hidden items-center from-black/60 to-black/70 ">
        <h1 className="text-[8vw] font-semibold whitespace-nowrap h-[80%] text-white py-10  texting ">
          Your Mobile Ideas, Our React Native Expertise
        </h1>
      </div>
    </div>
  );
};

export default SecondSection;
