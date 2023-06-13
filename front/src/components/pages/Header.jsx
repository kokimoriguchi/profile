import SideMenu from "../Hooks/SideMenu";
import HeaderMenu from "../Hooks/HeaderMenu";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white bg-blur-sm">
      <header>
        <div className="flex text-black sticky top-0 z-50 max-w-screen-2xl">
          <nav className="flex items-center justify-between container mx-auto py-4">
            <div className="text-xl font-bold max-sm:p-4">MY PROFILE</div>
            <HeaderMenu />
            <SideMenu />
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
