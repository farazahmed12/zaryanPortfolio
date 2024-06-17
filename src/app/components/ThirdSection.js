"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);
const ThirdSection = () => {
  const cont = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mainCover",
          // start: "250% 100%",
          // end: "-20% -100%",
          start: "top top",
          end: "-20% -100%",
          scrub: 5,
          pin: true,
          markers: true,
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

      gsap.to(".rowScroll", {
        x: () => `-${75 * 10}vw`,
        ease: "none",
        scrollTrigger: {
          trigger: ".rowScroll",
          start: "top 50%",
          end: "bottom -100%",
          pin: true,
          scrub: 3,
        },
      });
    },
    { scope: cont }
  );

  return (
    <div ref={cont} className="h-screen w-ful">
      <div className="h-screen w-full z-50 overflow-hidden flex flex-col justify-between  mainCover bg-white">
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

        <div
          style={{ width: "max-content" }}
          ref={containerRef}
          className="flex rowScroll flex-row gap-x-20  bg-yellow-400 justify-between items-center  "
        >
          <Card title={1} />
          <Card title={2} />
          <Card title={3} />
          <Card title={4} />
          <Card title={5} />
          <Card title={6} />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ThirdSection;
