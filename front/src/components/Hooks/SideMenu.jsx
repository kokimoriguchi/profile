import { HashLink } from "react-router-hash-link";
import { useState } from "react";

const SideMenu = () => {
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
    <button
      onClick={() => {
        handleClickMenu();
        handleClickSide();
      }}
      className="flex-initial md:hidden z-10 space-y-2 max-sm:p-4 "
    >
      {openMenu ? (
        <div className="relative w-6 h-px z-20">
          <div className="absolute w-6 h-px bg-black transform transition-all duration-500 rotate-45 top-1/2"></div>
          <div className="absolute w-6 h-px bg-black transform transition-all duration-500 -rotate-45 top-1/2"></div>
        </div>
      ) : (
        <div>
          <div className="w-6 h-0.5 bg-black transition-all duration-500 mb-2"></div>
          <div className="w-6 h-0.5 bg-black transition-all duration-500 mb-2"></div>
          <div className="w-6 h-0.5 bg-black transition-all duration-500"></div>
        </div>
      )}

      <div>
        <div
          className={`fixed right-0 top-0 h-full w-64 transition-transform duration-500 ease-in-out transform ${
            sideOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="z-50 mx-auto h-2/5 bg-gray-200 bg-opacity-80">
            <ul className="pt-20">
              <li className="font-semibold text-gray-800 hover:text-indigo-400 mb-1">
                <HashLink smooth to="/#Home">
                  Home
                </HashLink>
              </li>
              <li className="font-semibold text-gray-800 hover:text-indigo-400 mb-1">
                <HashLink smooth to="/#ProfileDetail">
                  Profile
                </HashLink>
              </li>
              <li className="font-semibold text-gray-800 hover:text-indigo-400 mb-1">
                <HashLink smooth to="/#Portfolio">
                  Portfolio
                </HashLink>
              </li>
              <li className="font-semibold text-gray-800 hover:text-indigo-400">
                <HashLink smooth to="/#Contact">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SideMenu;
