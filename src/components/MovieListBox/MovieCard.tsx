import { useContext, useState } from "react";
import type { MovieCardData } from "../../data/movies";
import { getImgUrl } from "../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import { MovieContext } from "../../context";
import { toast } from "react-toastify";

export default function MovieCard({ movie }: { movie: MovieCardData }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieCardData | null>(
    null
  );
  const { state, dispatch } = useContext(MovieContext);

  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleMovieSelection(movie: MovieCardData) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  function handleAddToCart(
    evnt: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    movie: MovieCardData
  ) {
    evnt.stopPropagation();

    const found = state.cartData.find((item: MovieCardData) => {
      return item.id === movie.id;
    });

    if (!found) {
      // setCartData([...cartData, movie]);
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
      toast.success(`Movie ${movie.title} added successfully`, {
        position: "bottom-right",
      });
      //
    } else {
      toast.error(
        `The movie ${movie.title} has been added to the cart already`,
        {
          position: "bottom-left",
        }
      );
    }
  }

  return (
    <>
      {showModal && selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={(evnt) => handleAddToCart(evnt, movie)}
        />
      )}

      <figure
        //   id={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm cursor-pointer"
              onClick={(evnt) => handleAddToCart(evnt, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
