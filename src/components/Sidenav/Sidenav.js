import { Link } from "react-router-dom";
import "./sidenav.css";

export const Sidenav = () => {
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <Link to="/gettingstarted">
            <button>Getting Started</button>
          </Link>
        </li>
        <li>
          <div>Components</div>
          <ul>
            <li>
              <Link to="/avatars">
                <button>Avatar</button>
              </Link>
            </li>
            <li>
              <Link to="/alerts">
                <button>Alert</button>
              </Link>
            </li>
            <li>
              <Link to="/badges">
                <button>Badge</button>
              </Link>
            </li>
            <li>
              <Link to="/cards">
                <button>Card</button>
              </Link>
            </li>
            <li>
              <Link to="/tags">
                <button>Tag</button>
              </Link>
            </li>
            <li>
              <Link to="/ratings">
                <button>Rating</button>
              </Link>
            </li>
            <li>
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
