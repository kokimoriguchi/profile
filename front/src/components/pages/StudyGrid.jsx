import React from "react";
import { StudyBookData } from "../Data/StudyBookData";
import { FadeIn } from "../Hooks/FadeIn";

const StudyGrid = () => {
  return (
    <FadeIn>
      <div>
        <div>
          <h1 className="text-black text-4xl font-bold sm:text-5xl md:text-6xl text-center mr-auto pt-4 pb-4 mb-10 ">
            LEARNING BOOKS
          </h1>
        </div>
        <div className="h-screen grid sm:grid-cols-5 sm:grid-rows-3 grid-cols-3 sm:mb-20 mb-40 gap-x-0.5">
          {StudyBookData.map((bookData, index) => (
            <div className="h-40" key={index}>
              <img
                src={bookData.bookImg}
                alt={bookData.bookAlt}
                className="h-40 m-auto flip-in-hor-bottom sm:hover:h-64 transition-all duration-500"
              />
              <p className="">{bookData.bookText}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default StudyGrid;
