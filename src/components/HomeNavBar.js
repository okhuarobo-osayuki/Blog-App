import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import "../assets/css/home-nav-bar.css";
import { CustomLink } from "./NavBar";
import { SearchReducer, SubMenuReducer } from "../hooks/reducer";

// The navigation component that contains the logo, the links to the different pages and the search functionality
function HomeNavBar() {
  // An onclick function that is called when the search button is clicked and returns the search query; and also returns to normal state when the search button is clicked again
  const [searchState, dispatch] = SearchReducer();

  const searchClose = () => {
    dispatch({ type: "SEARCH_CLOSE" });
  };

  const searchClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH_OPEN",
      payload: (
        <form className="search-form" method="GET">
          <input
            type="search"
            placeholder="Search for..."
            className="header-search-input"
          />
          {/* close search button */}
          <button className="search-close" onClick={searchClose}>
            close
          </button>
        </form>
      ),
    });
  };

    // An on click event that displays the sub-menu when the mouse hovers over the menu item and hides the sub-menu when the mouse leaves the menu item
    const [menuState, dispatchMenu] = SubMenuReducer()

    const subMenuOpen = (e) => {
      e.preventDefault();
      //An if statement to show sub-menu for two different menu items
      if (e.target.textContent === "Category") {
        if (menuState.subMenu === "") {
          dispatchMenu({
            type: "SUBMENU_OPEN",
            payload: (
              <div className="sub-menu">
                <ul className="sub-menu-items">
                  <li className="sub-menu-item">
                    <Link to="/pages/category/">Category 1</Link>
                  </li>
                  <li className="sub-menu-item">
                    <Link to="/pages/category/">Category 2</Link>
                  </li>
                </ul>
              </div>
            ),
          });
        } else if (menuState.subMenu !== "") {
          dispatchMenu({type: "SUBMENU_CLOSE"});
          dispatchMenu({
            type: "SUBMENU_OPEN",
            payload: (
              <div className="sub-menu">
                <ul className="sub-menu-items">
                  <li className="sub-menu-item">
                    <Link to="/pages/category/">Category 1</Link>
                  </li>
                  <li className="sub-menu-item">
                    <Link to="/pages/category/">Category 2</Link>
                  </li>
                </ul>
              </div>
            ),
          });
        }
      } else if (e.target.textContent === "Blog") {
        if (menuState.subMenu !== "") {
          dispatchMenu({
            type: "SUBMENU_OPEN",
            payload: (
              <div className="sub-menu-2">
                <ul className="sub-menu-items-2">
                  <li className="sub-menu-item-2">
                    <Link to="/pages/blog/">Blog 1</Link>
                  </li>
                  <li className="sub-menu-item-2">
                    <Link to="/pages/blog/">Blog 2</Link>
                  </li>
                </ul>
              </div>
            ),
          });
        } else if (menuState.subMenu === "") {
          dispatchMenu({
            type: "SUBMENU_OPEN",
            payload: (
              <div className="sub-menu-2">
                <ul className="sub-menu-items-2">
                  <li className="sub-menu-item-2">
                    <Link to="/pages/blog/">Blog 1</Link>
                  </li>
                  <li className="sub-menu-item-2">
                    <Link to="/pages/blog/">Blog 2</Link>
                  </li>
                </ul>
              </div>
            ),
          });
        }
      }
    };
  
    const closeSubMenu = (e) => {
      if (
        e.target.textContent !== "Category" ||
        e.target.textContent !== "Blog"
      ) {
        dispatchMenu({type: "SUBMENU_CLOSE"});
      }
    };

  return (
    <nav className="nav-bar">
      <h1 className="logo" onMouseOver={closeSubMenu}>
        <Link to="/">Blog</Link>
      </h1>
      <ul className="nav-list">
        <CustomLink to="/" className="nav-item" onMouseOver={closeSubMenu}>Home</CustomLink>
        <CustomLink to="/pages/" className="has-children nav-item" onMouseOver={subMenuOpen}>Category</CustomLink>{menuState.subMenu}
        <CustomLink to="/pages/" className="has-children nav-item" onMouseOver={subMenuOpen}>Blog</CustomLink>
        <CustomLink to="/pages/about" className="nav-item" onMouseOver={closeSubMenu}>About</CustomLink>
        <CustomLink to="/pages/" className="nav-item" onMouseOver={closeSubMenu}>Contact</CustomLink>
      </ul>

      <>{searchState.search}</>
      {/* Search input placed above the search icon */}

      <div className="nav-search" onClick={searchClick} onMouseOver={closeSubMenu}>
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

export default HomeNavBar;
