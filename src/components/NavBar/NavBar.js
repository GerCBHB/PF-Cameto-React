import { NavLink, Link } from "react-router-dom";

import logo from "../NavBar/assets/papeleria-logo.jpeg"

import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" width="50" />
      </Link>
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <NavLink
            to={`/category/libretas`}
            className={({ isActive }) =>
              isActive ? "navbar-item is-tab is-active" : "navbar-item is-tab"
            }
          >
            Libretas
          </NavLink>
          <NavLink
            to={`/category/recetarios`}
            className={({ isActive }) =>
              isActive ? "navbar-item is-tab is-active" : "navbar-item is-tab"
            }
          >
            Recetarios
          </NavLink>
          <NavLink
            to={`/category/boxes`}
            className={({ isActive }) =>
              isActive ? "navbar-item is-tab is-active" : "navbar-item is-tab"
            }
          >
            Boxes
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
