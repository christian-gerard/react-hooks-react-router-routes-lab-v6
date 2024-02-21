import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/moviecard'>Movie Card</NavLink>
    </nav>
    );
};

export default NavBar;
