"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ThirdSection = () => {
  const cont = useRef(null);
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainCover",
        start: "top 500px",
        end: "+=300",
        scrub: 5,
      },
    });

    tl.to(".mainCover", {
      backgroundColor: "#f05213",
      duration: 1.5,
    })
      .to(".mainCover", { backgroundColor: "#a6f013", duration: 1.5 })
      .to(".mainCover", { backgroundColor: "#1338f0", duration: 1.5 })
      .to(".mainCover", { backgroundColor: "#000000", duration: 1.5 });

    gsap.fromTo(
      ".letter",
      {
        opacity: 0,
        y: "-30px",
      },
      {
        opacity: 1,
        y: "0px",
        color: "white",
        stagger: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".heading",
          start: "-20%' top",
          end: "bottom bottom",
          scrub: 5,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
  return (
    <div className="h-[100vh] w-full z-50 overflow-hidden  mainCover bg-white">
      <h1 className="text-black text-[17vw] uppercase heading whitespace-nowrap gap-x-10 font-medium  leading-normal">
        <span className="letter">P</span>
        <span className="letter">o</span>
        <span className="letter">r</span>
        <span className="letter">t</span>
        <span className="letter">f</span>
        <span className="letter">o</span>
        <span className="letter">l</span>
        <span className="letter">i</span>
        <span className="letter">o</span>
      </h1>
    </div>
  );
};

export default ThirdSection;
