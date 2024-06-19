import React from "react";

const Card = ({ title, desc, img }) => {
  return (
    <div className="flex flex-col  w-[80vw] min-h-72  shadow-md border-4 border-white  rounded-lg   md:flex-row">
      <img
        className="object-cover w-[45%] h-full"
        src={img}
        alt="This is App Image"
      />
      <div className="flex flex-col justify-start gap-y-2 p-4 py-6 h-[100%]  leading-normal overflow-hidden">
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-white ">
          {title}
        </h5>
        <p className="mb-2 font-normal text-white ">{desc}</p>
        <h2 className="mb-1 text-lg font-semibold text-white ">Skills:</h2>

        <ul className="max-w-md space-y-1 text-white list-disc list-inside ">
          <li className="text-white">
            Developed with React Native for a seamless cross-platform
            experience.
          </li>
          <li className="text-white">
            Integrated push notifications to keep users engaged and informed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
