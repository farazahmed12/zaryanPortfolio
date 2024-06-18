import React from "react";

const Card = ({ title, desc, img }) => {
  return (
    <div className="flex flex-col  w-[80vw] min-h-72  shadow-lg rounded-lg overflow-hidden  md:flex-row">
      <img
        className="object-cover w-[45%] rounded-t-lg h-full"
        src={img}
        alt=""
      />
      <div className="flex flex-col justify-start gap-y-2 p-4 h-[100%]  leading-normal">
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-white ">
          {title}
        </h5>
        <p className="mb-2 font-normal text-white ">{desc}</p>
        <h2 class="mb-1 text-lg font-semibold text-white ">Skills:</h2>

        <ul class="max-w-md space-y-1 text-white list-disc list-inside ">
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
