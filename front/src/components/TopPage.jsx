import Home from "./Home";
import ProfileDetail from "./ProfileDetail";
import TopVideo from "./TopVideo";

function TopPage() {
  return (
    <div className="bg-[/images/white_00083.jpg]">
      <div className="">
        <TopVideo />
        <Home />
        <ProfileDetail />
      </div>
    </div>
  );
}

export default TopPage;
