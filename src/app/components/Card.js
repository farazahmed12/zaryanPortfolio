import React from "react";

const Card = ({ title }) => {
  return (
    <div>
      <a
        href="#"
        className="flex flex-col items-center border w-[70vw] border-gray-200 rounded-lg shadow md:flex-row - "
      >
        <img
          className="object-cover w-48 rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-s-lg"
          src="/oneday.png"
          alt=""
        />
        <div className="flex flex-col justify-between p-4  bg-green-300 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            OneDay.ae is a user-friendly e-commerce app designed to
            revolutionize online shopping in the UAE. Built with React Native,
            the app
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
