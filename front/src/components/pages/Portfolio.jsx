import Slide from "../Hooks/slide";
import { FadeIn } from "../Hooks/FadeIn";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="mb-20 ">
      <h1 className="text-black-800 text-4xl font-bold sm:text-5xl md:text-6xl text-center pt-4 pb-4">
        Portfolio
      </h1>
      <hr />
      <FadeIn>
        <Slide />
      </FadeIn>
    </div>
  );
};
export default Portfolio;
