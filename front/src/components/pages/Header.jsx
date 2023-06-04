import SideMenu from "../Hooks/SideMenu";
import HeaderMenu from "../Hooks/HeaderMenu";

const Header = () => {
  return (
    <div>
      <header>
        <div className="flex bg-gray-800 text-white sticky top-0 z-50 max-w-screen-2xl">
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
