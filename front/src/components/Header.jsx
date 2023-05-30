import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import ProfileDetail from "./ProfileDetail";
import Portfolio from "./Portfolio";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);

  const handleClickMenu = () => {
    setOpenMenu((prevOpenMenu) => {
      return !prevOpenMenu;
    });
  };

  const handleClickSide = () => {
    setSideOpen((prevSideOpen) => {
      return !prevSideOpen;
    });
  };

  return (
    <BrowserRouter>
      <header className="bg-gray-800 text-white sticky top-0 z-50 max-w-screen-2xl">
        <nav className="flex items-center justify-between container mx-auto py-4">
          <div className="text-xl font-bold max-sm:p-4">MY PROFILE</div>
          <ul className="md:flex space-x-4 hidden">
            <li className="hover:text-gray-300">
              <Link to="/Home">Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/ProfileDetail">Profile</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <button
            onClick={() => {
              handleClickMenu();
              handleClickSide();
            }}
            className="flex-initial md:hidden z-10 space-y-2 max-sm:p-4 "
          >
            {openMenu ? (
              <div className="relative w-6 h-px ">
                <div className="absolute w-6 h-px bg-white transform rotate-45 top-1/2"></div>
                <div className="absolute w-6 h-px bg-white transform -rotate-45 top-1/2"></div>
              </div>
            ) : (
              <div>
                <div className="w-6 h-px bg-white mb-2"></div>
                <div className="w-6 h-px bg-white mb-2"></div>
                <div className="w-6 h-px bg-white"></div>
              </div>
            )}

            <div>
              <div
                className={`fixed right-0 top-0 h-full w-64 transition-transform duration-200 ease-in-out transform ${
                  sideOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="z-50 mx-auto h-2/5 bg-gray-200 bg-opacity-80">
                  <ul className="pt-20">
                    <li className="font-semibold text-gray-800 hover:text-gray-300 mb-1">
                      <Link to="/Home">Home</Link>
                    </li>
                    <li className="font-semibold text-gray-800 hover:text-gray-300 mb-1">
                      <Link to="/ProfileDetail">Profile</Link>
                    </li>
                    <li className="font-semibold text-gray-800 hover:text-gray-300 mb-1">
                      <Link to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="font-semibold text-gray-800 hover:text-gray-300">
                      <Link to="/Contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </button>
        </nav>
      </header>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/ProfileDetail" element={<ProfileDetail />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Header;
