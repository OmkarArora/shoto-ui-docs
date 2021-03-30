import { GiHamburgerMenu } from "react-icons/gi";
import { useNav } from "../contexts/nav-context";
import {useWindowSize} from "../useWindowSize";
import "./header.css";

export const Header = () => {
	const screenWidth = useWindowSize().width;
	const {setMobileNav} = useNav();
  return (
    <header className="header">
      <div className="container-btn-menu">
		  {screenWidth<768 && <span><GiHamburgerMenu onClick={() => setMobileNav(prev => !prev)}/></span>} 
      </div>
    </header>
  );
};
