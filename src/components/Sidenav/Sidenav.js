import { Link } from "react-router-dom";
import { useWindowSize } from "../useWindowSize";
import "./sidenav.css";
import { useNav } from "../contexts/nav-context";
import logo from "../../images/favicon.png";

export const Sidenav = () => {
  const screenWidth = useWindowSize().width;
  const { activeNavLink, mobileNavOpen, setMobileNav } = useNav();

  return (
    <nav
      className={
        screenWidth < 768 ? `sidenav mobile ${mobileNavOpen}` : "sidenav"
      }
    >
      {mobileNavOpen && (
        <span className="overlay" onClick={() => setMobileNav(false)}></span>
      )}
      <div className="heading">
        <Link to="/gettingstarted">
        <div className="logo">
          <div>
            <img src={logo} alt="shoto ui logo" />
          </div>
          <div>
            Shoto UI<div className="version">v1.2.3</div>
          </div>
        </div>
        </Link>
      </div>
      <ul className="ul-outer">
        <li className="link-hoverable">
          <Link
            to="/gettingstarted"
            className={activeNavLink === "gettingstarted" ? "active" : ""}
          >
            <button className="btn-main">Getting Started</button>
          </Link>
        </li>
        <li>
          <div>Components</div>
          <ul className="ul-inner">
            <li className="link-hoverable">
              <Link
                to="/avatars"
                className={activeNavLink === "avatars" ? "active" : ""}
              >
                <button>Avatar</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link
                to="/alerts"
                className={activeNavLink === "alerts" ? "active" : ""}
              >
                <button>Alert</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link
                to="/badges"
                className={activeNavLink === "badges" ? "active" : ""}
              >
                <button>Badge</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link
                to="/cards"
                className={activeNavLink === "cards" ? "active" : ""}
              >
                <button>Card</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link
                to="/tags"
                className={activeNavLink === "tags" ? "active" : ""}
              >
                <button>Tag</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link
                to="/ratings"
                className={activeNavLink === "ratings" ? "active" : ""}
              >
                <button>Rating</button>
              </Link>
            </li>
            <li className="link-hoverable">
              <Link
                to="/snackbars"
                className={activeNavLink === "snackbars" ? "active" : ""}
              >
                <button>Snackbar</button>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
