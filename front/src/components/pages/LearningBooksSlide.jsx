import Slide from "../Hooks/slide";
import { FadeIn } from "../Hooks/FadeIn";

const LearningBooksSlide = () => {
  return (
    <div id="LearningBooksSlide" className="mb-20 sm:pt-10 pt-20">
      <h1 className="text-black-800 text-4xl font-bold sm:text-5xl md:text-6xl text-center pt-4 pb-4">
        LearningBooks
      </h1>
      <hr />
      <FadeIn>
        <Slide />
      </FadeIn>
    </div>
  );
};
export default LearningBooksSlide;
