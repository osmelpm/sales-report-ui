import "./Navbar.css";
import Avatar from "../Avatar/Avatar";

const Navbar = () => {
  return (
    <nav className="navbar__container">
      <h3 className="menu">Menu</h3>
      <Avatar />
      <h3 className="title">Sales Report</h3>
    </nav>
  );
};

export default Navbar;
