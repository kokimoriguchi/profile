import React from "react";
import Slide from "../Hooks/slide";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="bg-gray-200 py-40 font-mono">
      <div className="relative">
        <h1 className="text-indigo-400 text-4xl z-10 font-semibold sm:text-5xl md:text-[70px] text-center opacity-50 mr-auto pb-4 mb-10 ">
          PORTFOLIOS
        </h1>
        <h1 className="text-[70px] absolute top-[2px] right-[500px] font-semibold leading-none text-black ">
          PORTFOLIOS
        </h1>
      </div>
      <div className=" shadow-2xl mb-5">
        <Slide />
      </div>
    </div>
  );
};

export default Portfolio;
