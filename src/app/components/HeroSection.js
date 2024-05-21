import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-center h-screen bg-white">
      <div className="h-full flex  flex-col justify-between items-center ">
        <div className="flex flex-col items-center">
          <div className="relative mt-20 flex flex-col items-center  w-fit self-center ">
            <p className="text-xl font-semibold  text-center self-center p-2 px-4 rounded-full border border-black text-black">
              Hello!
            </p>
            <img
              src="/vector.png"
              className=" w-10 -top-5 absolute -right-10  h-10 object-contain "
            />
          </div>
          <p className="text-black font-bold leading-normal text-6xl w-50 text-center">
            I'm <span className="text-[#FD853A]">Sarmad Zaryan</span>,
            <br /> React Native Developer
          </p>
        </div>

        <div className="relative  w-full">
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
          <img
            src="/img1.jpg"
            className="border w-40 top-0 absolute left-1/2 transform -translate-x-1/2  h-40 object-cover rounded-full overflow-hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
