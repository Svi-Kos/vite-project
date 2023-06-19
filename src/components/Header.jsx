import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Host
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Vans
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          News
        </NavLink>
      </nav>
    </header>
  );
}
