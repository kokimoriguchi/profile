import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeaderMenu = () => {
  return (
    <BrowserRouter>
      <ul className="md:flex space-x-4 hidden">
        <li className="hover:text-indigo-400 cursor-pointer">
          <HashLink smooth to="/#Home">
            Top
          </HashLink>
        </li>
        <li className="hover:text-indigo-400 cursor-pointer">
          <HashLink smooth to="/#ProfileDetail">
            Profile
          </HashLink>
        </li>
        <li className="hover:text-indigo-400 cursor-pointer">
          <HashLink smooth to="/#Portfolio">
            Portfolio
          </HashLink>
        </li>
        <li className="hover:text-indigo-400 cursor-pointer">
          <HashLink smooth to="/#Contact">
            Contact
          </HashLink>
        </li>
      </ul>
    </BrowserRouter>
  );
};
export default HeaderMenu;
