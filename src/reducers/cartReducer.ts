import type { MovieCardData } from "../data/movies";

export type StateType = {
  cartData: MovieCardData[];
};

export type ActionType =
  | { type: "ADD_TO_CART"; payload: MovieCardData }
  | { type: "REMOVE_FROM_CART"; payload: MovieCardData };

const initialState: StateType = {
  cartData: [],
};

const cartReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...state.cartData, action.payload],
      };
      break;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
      break;

    default:
      return state;
  }
};

export { initialState, cartReducer };
