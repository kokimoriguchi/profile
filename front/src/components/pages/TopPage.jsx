import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";
import ProfileDetail from "./ProfileDetail";
import TopVideo from "./TopVideo";
import Skill from "./Skill";
import StudyGrid from "./StudyGrid";

function TopPage() {
  return (
    <>
      <TopVideo />
      <div className="mx-auto max-w-screen-2xl pb-4 ">
        <div className="h-auto md:py-10 xl:py-28">
          <Home />
          <ProfileDetail />
          <Skill />
          <StudyGrid />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default TopPage;
