import { createContext } from "react";
import type { MovieCardData } from "../data/movies";

type MovieContextType = {
  cartData: MovieCardData[];
  setCartData: React.Dispatch<React.SetStateAction<MovieCardData[]>>;
};

const MovieContext = createContext<MovieContextType>({
  cartData: [],
  setCartData: () => {},
});

export { MovieContext };
