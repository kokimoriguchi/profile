import SideMenu from "../Hooks/SideMenu";
import HeaderMenu from "../Hooks/HeaderMenu";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white bg-blur-sm font-mono">
      <header>
        <div className="flex text-black sticky top-0 z-50 max-w-screen-2xl">
          <nav className="flex items-center justify-between container mx-auto py-4">
            <div className="text-xl font-bold max-sm:p-4">PROFILE SITE</div>
            <HeaderMenu />
            <SideMenu />
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
