import React from "react";
import PortfolioData from "../Data/PortfolioData";
import { SiGithub } from "react-icons/si";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="bg-gray-100 font-mono">
      <div className="relative">
        <h1 className="text-indigo-400 text-4xl z-10 font-semibold sm:text-5xl md:text-[70px] text-center opacity-50 mr-auto pb-4 mb-10 ">
          PORTFOLIOS
        </h1>
        <h1 className="text-[70px] absolute top-[2px] right-[500px] font-semibold leading-none text-black ">
          PORTFOLIOS
        </h1>
      </div>
      <div className="w-[1200px] m-auto flex flex-wrap justify-center">
        {PortfolioData.map((portfolioData, index) => (
          <table className="h-[500px] w-[500px] my-3 mx-5" key={index}>
            <thead>
              <tr>
                <th className="border border-slate-300 flex flex-row justify-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 bg-indigo-200 ">
                  <img
                    src={portfolioData.imgSrc}
                    alt={portfolioData.altText}
                    className="w-[400] h-[300] transition-all duration-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="border h-52 border-slate-300 flex flex-col pt-4 px-4">
                  <p className="text-xl font-medium">{portfolioData.altText}</p>
                  <p className="pt-6 text-sm opacity-50">Description</p>
                  <p className="flex-grow font-medium">
                    {portfolioData.detailContent}
                  </p>
                  <a
                    href={portfolioData.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 cursor-pointer transition-all flex flex-row justify-end duration-200"
                  >
                    <p className="pt-1 pr-2">check</p>
                    <SiGithub className="text-3xl" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
