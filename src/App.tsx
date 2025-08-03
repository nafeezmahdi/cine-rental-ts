import { useState } from "react";

import { MovieContext, ThemeContext } from "./context";
import type { MovieCardData } from "./data/movies";
import Page from "./Page";

function App() {
  const [cartData, setCartData] = useState<MovieCardData[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
