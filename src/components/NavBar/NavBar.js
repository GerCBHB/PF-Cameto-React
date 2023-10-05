import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>Khali Design</h3>
      </Link>
      <div className="Categories">
        <NavLink to={`/category/Libretas`} activeClassName="ActiveOption" className="Option" />
        <NavLink to={`/category/Recetarios`} activeClassName="ActiveOption" className="Option" />
        <NavLink to={`/category/Boxes`} activeClassName="ActiveOption" className="Option" />
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;