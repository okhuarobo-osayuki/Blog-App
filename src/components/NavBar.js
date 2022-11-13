import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../assets/css/navbar.css";

function CustomLInk({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return (
    <li className={isActive ? "active" : "nav-items"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>
        <Link to="/">Blog</Link>
      </h1>
      <ul>
        <CustomLInk to="/">Home</CustomLInk>
        <CustomLInk to="/pages/about">About</CustomLInk>
        <CustomLInk to="/pages/">About</CustomLInk>
        <CustomLInk to="/pages/">About</CustomLInk>
        <CustomLInk to="/pages/">About</CustomLInk>
      </ul>
      <div className="nav-search">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
          ></path>
        </svg>
      </div>
    </nav>
  );
}

export default NavBar;
