import { useReducer, useState } from "react";

import { MovieContext, ThemeContext } from "./context";
// import type { MovieCardData } from "./data/movies";
import Page from "./Page";
import {
  cartReducer,
  initialState,
  // type ActionType,
  // type StateType,
} from "./reducers/cartReducer";

function App() {
  // const [cartData, setCartData] = useState<MovieCardData[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
