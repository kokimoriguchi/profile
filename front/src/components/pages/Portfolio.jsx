import React from "react";
import { FadeIn } from "../Hooks/FadeIn";
import PortfolioData from "../Data/PortfolioData";

const Portfolio = () => {
  return (
    <FadeIn>
      <div id="Portfolio" className="bg-gray-100">
        <div>
          <h1 className="text-black text-4xl font-bold sm:text-5xl md:text-6xl text-center mr-auto pb-4 mb-10 ">
            PORTFOLIOS
          </h1>
        </div>
        <div className="h-screen grid sm:grid-cols-3 sm:grid-rows-3 grid-cols-3 sm:mb-20 mb-40 gap-x-0.5">
          {PortfolioData.map((portfolioData, index) => (
            <div className="h-40" key={index}>
              <img
                src={portfolioData.imgSrc}
                alt={portfolioData.altText}
                className="m-auto transition-all duration-500"
              />
              <p className="">{portfolioData.detailContent}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Portfolio;
