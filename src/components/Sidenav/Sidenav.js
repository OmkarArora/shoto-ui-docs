import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { useWindowSize } from "../useWindowSize";
import "./sidenav.css";
import { useNav } from "../contexts/nav-context";

export const Sidenav = () => {
  const screenWidth = useWindowSize().width;
  const { mobileNavOpen, setMobileNav } = useNav();

  return (
    <nav
      className={
        screenWidth < 768 ? `sidenav mobile ${mobileNavOpen}` : "sidenav"
      }
    >
      <div className="heading">
        <div className="logo">Shoto UI</div>
        <div className="version">v1.2.2</div>
        {screenWidth < 768 && (
          <div>
            <GrClose onClick={() => setMobileNav((prev) => !prev)} />
          </div>
        )}
      </div>
      <ul className="ul-outer">
        <li className="link-hoverable">
          <Link to="/gettingstarted">
            <button className="btn-main">Getting Started</button>
          </Link>
        </li>
        <li>
          <div>Components</div>
          <ul className="ul-inner">
            <li className="link-hoverable">
              <Link to="/avatars">
                <button>Avatar</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link to="/alerts">
                <button>Alert</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link to="/badges">
                <button>Badge</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link to="/cards">
                <button>Card</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link to="/tags">
                <button>Tag</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link to="/ratings">
                <button>Rating</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link to="/snackbars">
                <button>Snackbar</button>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
