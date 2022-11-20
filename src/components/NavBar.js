import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../assets/css/navbar.css";

// A custom link component that styles itself as active if the pathname of the URL matches the active link
function CustomLink({ to, children, ...props }) {
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

// The navigation component that contains the logo, the links to the different pages and the search functionality
function NavBar() {
  // An onclick function that is called when the search button is clicked and returns the search query; and also returns to normal state when the search button is clicked again
  const [search, setSearch] = useState();
  
  // An onclick function that closes the search bar when the close button is clicked
  const searchClose = () => {
    setSearch();
  };

// An onclick function that opens the search bar when the search button is clicked
  const searchClick = (e) => {
    e.preventDefault();
    setSearch((prev) => {
      return (
        <form className="search-form" method="GET" >
          <input type="search" placeholder="Search for..." className="header-search-input" />
          {/* close search button */}
          <button className="search-close" onClick={searchClose}>close</button>
        </form>
      );
    });
  };

  return (
    <nav className="nav-bar">
      <h1>
        <Link to="/">Blog</Link>
      </h1>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/pages/">Category</CustomLink>
        <CustomLink to="/pages/">Blog</CustomLink>
        <CustomLink to="/pages/about">About</CustomLink>
        <CustomLink to="/pages/">Contact</CustomLink>
      </ul>
      {/* Search value placed above the search icon */}
        <>{search}</>
      <div className="nav-search" onClick={searchClick}>
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
