import { createContext } from "react";
import type { MovieCardData } from "../data/movies";

type StateType = {
  cartData: MovieCardData[];
};

type ActionType =
  | { type: "ADD_TO_CART"; payload: MovieCardData }
  | { type: "REMOVE_FROM_CART"; payload: MovieCardData };

type MovieContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const MovieContext = createContext<MovieContextType>({
  state: { cartData: [] },
  dispatch: () => {},
});

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export { MovieContext, ThemeContext };
