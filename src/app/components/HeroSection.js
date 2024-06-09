import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-center h-screen bg-[#171717]">
      <div className="h-full flex  flex-col justify-between items-center ">
        <div className="flex flex-col  items-center">
          <div className="relative mt-20 flex flex-col items-center  w-fit self-center ">
            <p className="text-xl font-semibold  text-center self-center p-2 px-4 rounded-full border-2 border-[#FD853A] text-white">
              Hello!
            </p>
            <img
              src="/vector.png"
              className=" w-10 -top-5 absolute -right-10  h-10 object-contain "
            />
          </div>
          <p className="text-white font-bold leading-normal text-6xl w-50 text-center">
            I'm <span className="text-[#FD853A]">Sarmad Zaryan</span>,
            <br /> React Native Developer
          </p>
        </div>

        <div className=" flex flex-row justify-between w-full px-20 ">
          <blockquote class="text-xl italic font-semibold text-gray-900 w-4/12 dark:text-white">
            <svg
              class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FD853A"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p className="text-white font-semibold leading-normal text-lg w-50 text-center">
              "Transforming ideas into reality with innovative mobile apps.
              Precision, creativity, and efficiency in every line of code."
            </p>
          </blockquote>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-x-2 ">
              <img src="/Star.png" className="h-6 w-6 object-contain" />
              <img src="/Star.png" className="h-6 w-6 object-contain" />
              <img src="/Star.png" className="h-6 w-6 object-contain" />
              <img src="/Star.png" className="h-6 w-6 object-contain" />
              <img src="/Star.png" className="h-6 w-6 object-contain" />
            </div>
            <p className="text-xl font-semibold text-center  self-center p-2 px-4 rounded-full text-white">
              10 Years Experience
            </p>
          </div>
        </div>

        <div className="relative  w-full">
          <img
            src="/img1.jpg"
            className=" overflow-hidden  w-72 h-72 top-0 absolute left-1/2 transform -translate-x-1/2 -translate-y-28  object-cover rounded-full"
          />
          <svg
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#FD853A"
              fill-opacity="1"
              d="M0,64L40,90.7C80,117,160,171,240,202.7C320,235,400,245,480,218.7C560,192,640,128,720,112C800,96,880,128,960,138.7C1040,149,1120,139,1200,149.3C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
