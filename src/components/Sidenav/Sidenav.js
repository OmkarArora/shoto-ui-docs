import {Link} from "react-router-dom";
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
		  </ul>
        </li>
      </ul>
    </nav>
  );
};
