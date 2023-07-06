import { Link, NavLink, useNavigate } from "react-router-dom";
import avatarImg from "../assets/images/avatar-icon.png";

export default function Header() {
  const isLoggedIn = localStorage.getItem("loggedin");
  const navigate = useNavigate();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
    navigate("/login");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/news"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          News
        </NavLink>
        <Link to="login" className="login-link">
          <img src={avatarImg} className="login-icon" />
        </Link>
        <button
          onClick={fakeLogOut}
          style={isLoggedIn ? { display: "block" } : { display: "none" }}
        >
          Log out
        </button>
      </nav>
    </header>
  );
}
