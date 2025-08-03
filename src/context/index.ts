import { createContext } from "react";
import type { MovieCardData } from "../data/movies";

type MovieContextType = {
  cartData: MovieCardData[];
  setCartData: React.Dispatch<React.SetStateAction<MovieCardData[]>>;
};

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const MovieContext = createContext<MovieContextType>({
  cartData: [],
  setCartData: () => {},
});

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export { MovieContext, ThemeContext };
