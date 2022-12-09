import { useReducer } from "react";

// search reducer
export const SearchReducer = () => {
  const initialState = {
    search: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_OPEN":
        return {
          ...state,
          search: action.payload,
        };
      case "SEARCH_CLOSE":
        return {
          ...state,
          search: "",
        };
      default:
        return state;
    }
  };

  const [searchState, dispatch] = useReducer(reducer, initialState);

  return [searchState, dispatch];
};


// subMenu reducer
export const SubMenuReducer = () => {
  const initialState = {
    subMenu: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SUBMENU_OPEN":
        return {
          ...state,
          subMenu: action.payload,
        };
      case "SUBMENU_CLOSE":
        return {
          ...state,
          subMenu: "",
        };
      default:
        return state;
    }
  };

  const [menuState, dispatchMenu] = useReducer(reducer, initialState);

  return[menuState, dispatchMenu];
};
