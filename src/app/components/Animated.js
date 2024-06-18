"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedComponent = () => {
  const textRef = useRef(null);
  const textWrap = useRef(null);
  const container = useRef();

  // useEffect(() => {
  //   if (!textRef.current || !textWrap.current) return;

  //   console.log("textRef:", textRef.current);
  //   console.log("textWrap:", textWrap.current);

  //   // Create the ScrollTrigger instance
  //   const pinTrigger = ScrollTrigger.create({
  //     trigger: textWrap.current,
  //     pin: true,
  //     start: "top top",
  //     end: "+=200%",
  //   });

  //   // Create the GSAP timeline and link it with the ScrollTrigger
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: textWrap.current,
  //       start: "top top",
  //       end: "+=200%",
  //       scrub: 2,
  //       pin: true,
  //     },
  //   });

  //   // Add animation to the timeline
  //   tl.to(textWrap.current, {
  //     x: "-300%",
  //   });

  //   gsap.to(textRef.current, {
  //     x: "50%",
  //     scale: 1.1,
  //     duration: 2,
  //   });

  //   // Clean up on component unmount
  //   return () => {
  //     pinTrigger.kill();
  //     tl.kill();
  //   };
  // }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });

      tl.to(".trigger", { translateX: "-70%" });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="content-wrapper main overflow-x-hidden bg-gray-300 h-full"
    >
      <div className="box w-20 h-20 bg-red-300"></div>

      <p className=" trigger text-8xl font-semibold text-red-300  transform translate-x-[70%]">
        A new way of designing, discovering and sharing
      </p>
      {/* <h2
        ref={textRef}
        className="text_row text-red-500 text-8xl font-semibold"
      >
        No Row
      </h2>
      <div className="your-text-wrapper-class bg-green-200 flex justify-center items-center h-screen">
        <h1
          ref={textWrap}
          className="text-vw font-bold text-red-300 whitespace-nowrap text-wrapper transform translate-x-[70%]"
        >
          A new way of designing, discovering and sharing
        </h1>
      </div> */}
    </div>
  );
};

export default AnimatedComponent;
