import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";
import ProfileDetail from "./ProfileDetail";
import TopVideo from "./TopVideo";
import Skill from "./Skill";
import LearningBooksSlide from "./LearningBooksSlide";
import MyFavorite from "./MyFavorite";
import {
  SectionLineVideo,
  SectionLineWhiteToGray,
  SectionLineGrayToWhite,
} from "./SectionLine";

function TopPage() {
  return (
    <>
      <TopVideo />
      <SectionLineVideo />
      <div className="mx-auto max-w-screen-2xl pb-4 ">
        <div className="h-auto md:py-10 xl:py-28">
          <Home />
          <SectionLineWhiteToGray />
          <ProfileDetail />
          <SectionLineGrayToWhite />
          <MyFavorite />
          <SectionLineWhiteToGray />
          <Portfolio />
          <Skill />
          <LearningBooksSlide />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default TopPage;
