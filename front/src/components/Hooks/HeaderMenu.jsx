import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeaderMenu = () => {
  return (
    <BrowserRouter>
      <ul className="md:flex space-x-4 hidden">
        <li className="hover:text-gray-300">
          <HashLink smooth to="/#Home">
            Home
          </HashLink>
        </li>
        <li className="hover:text-gray-300">
          <HashLink smooth to="/#ProfileDetail">
            Profile
          </HashLink>
        </li>
        <li className="hover:text-gray-300">
          <HashLink smooth to="/#Portfolio">
            Portfolio
          </HashLink>
        </li>
        <li className="hover:text-gray-300">
          <HashLink smooth to="/#Contact">
            Contact
          </HashLink>
        </li>
      </ul>
    </BrowserRouter>
  );
};
export default HeaderMenu;
