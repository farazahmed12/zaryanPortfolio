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

  // projects Array
  const projectsArray = [
    {
      title: "Oneday.ae App",
      desc: `OneDay.ae is a user-friendly e-commerce app designed to revolutionize online shopping in the UAE. Built with React Native, the app`,
      img: "/oneday.png",
    },
    {
      title: "24/7 Car Wash App",
      desc: `24/7 Car Wash is a modern app designed to provide round-the-clock car wash services at your convenience. With an easy-to-use interface and reliable service providers, keeping your car clean has never been more accessible.`,
      img: "/carwash.png",
    },
    {
      title: "Connect Date App",
      desc: `Connect Date is a dynamic dating platform designed to help people forge meaningful connections. With intuitive features and a vibrant community, it makes finding companionship easy and enjoyable, bringing like-minded individuals together.`,
      img: "/connectDate.png",
    },
    {
      title: "Pak Auto Zone App ",
      desc: `Pak Auto Zone is an innovative app dedicated to simplifying car buying and selling. With a user-friendly interface and a vast selection of vehicles, it revolutionizes the auto trade in Pakistan, making transactions seamless and efficient.`,
      img: "/pakauto.png",
    },

    {
      title: "Emedz Doctors Appointment App",
      desc: `Emedz Doctors Appointment App is a cutting-edge platform designed to streamline the process of scheduling medical appointments. With a user-friendly interface and robust features, it connects patients with healthcare professionals efficiently and conveniently.`,
      img: "/emedz.png",
    },
  ];

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mainCover",
          // start: "250% 100%",
          // end: "-20% -100%",
          start: "top top",
          end: "-50% -100%",
          scrub: 5,
          pin: true,
          // markers: true,
        },
      });

      tl.to(".mainCover", {
        backgroundColor: "#000080",
        duration: 1.5,
      })
        .to(".mainCover", { backgroundColor: "#228B22", duration: 1.5 })
        .to(".mainCover", { backgroundColor: "#4B0082", duration: 1.5 })
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

      const container = containerRef.current;
      const projectsLength = projectsArray?.length || 0;

      console.log("container.scrollWidth", container.scrollWidth);
      console.log(" window.innerWidth", window.innerWidth);

      gsap.to(".rowScroll", {
        // x: () => `-${80 * projectsArray?.length}vw`,
        x: () => `-${container.scrollWidth - window.innerWidth}vw`,
        ease: "none",
        scrollTrigger: {
          trigger: ".rowScroll",
          start: "top 35%",
          // end: "bottom -100%",
          end: () => `+=${container.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 3,
          markers: true,
        },
      });
    },
    { scope: cont }
  );

  return (
    <div ref={cont} className="h-screen w-ful">
      <div className="h-screen w-full z-50 overflow-hidden flex flex-col justify-between  mainCover bg-[#000000]">
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
          className="flex rowScroll flex-row gap-x-10 ml-10 justify-evenly items-center  "
        >
          {projectsArray?.map((item) => {
            return (
              <Card
                title={item?.title}
                desc={item?.desc}
                img={item?.img}
                key={item?.title}
              />
            );
          })}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ThirdSection;
