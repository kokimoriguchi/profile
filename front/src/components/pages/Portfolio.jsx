import React from "react";
import Slide from "../Hooks/slide";
import PortfolioData from "../Data/PortfolioData";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="bg-gray-200 py-40 font-mono">
      <div className="relative">
        <h1 className="text-indigo-400 text-4xl z-10 font-semibold sm:text-[70px] text-center opacity-50 mr-auto pb-4 mb-10 ">
          PORTFOLIOS
        </h1>
        <h1 className="sm:text-[70px] text-4xl absolute top-[2px] sm:right-[500px] right-[85px] font-semibold text-black ">
          PORTFOLIOS
        </h1>
      </div>
      <div className="sm:block hidden shadow-2xl mb-5">
        <Slide />
      </div>
      <div className="sm:hidden block">
        <div className="h-full w-full grid grid-cols-2 gap-4">
          {PortfolioData.map((portfolioData, index) => (
            <div className="justify-center items-center" key={index}>
              <img
                src={portfolioData.imgSrc}
                alt={portfolioData.altText}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
