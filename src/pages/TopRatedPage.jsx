import { useState } from "react";
import { useSelector } from "react-redux";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";

const topRatedMovies = [
    { id: 1, title: "The Shawshank Redemption", poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", vote_average: 9.3 },
    { id: 2, title: "The Godfather", poster_path: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", vote_average: 9.2 },
    { id: 3, title: "The Dark Knight", poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", vote_average: 9.0 },
    { id: 4, title: "Pulp Fiction", poster_path: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", vote_average: 8.9 },
    { id: 5, title: "Schindler's List", poster_path: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg", vote_average: 8.9 },
    { id: 6, title: "12 Angry Men", poster_path: "https://image.tmdb.org/t/p/w500/7sf9CgJz30aXDvrg7DYYUQ2U91T.jpg", vote_average: 9.0 },
    { id: 7, title: "Parasite", poster_path: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", vote_average: 8.5 },
    { id: 8, title: "Fight Club", poster_path: "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg", vote_average: 8.8 },
    { id: 9, title: "Forrest Gump", poster_path: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", vote_average: 8.8 },
    { id: 10, title: "The Matrix", poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", vote_average: 8.7 },
    { id: 11, title: "Gladiator", poster_path: "https://image.tmdb.org/t/p/w500/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg", vote_average: 8.5 },
    { id: 12, title: "The Green Mile", poster_path: "https://image.tmdb.org/t/p/w500/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg", vote_average: 8.6 },
    { id: 13, title: "Interstellar", poster_path: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", vote_average: 8.7 },
    { id: 14, title: "Se7en", poster_path: "https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg", vote_average: 8.6 },
    { id: 15, title: "Inception", poster_path: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg", vote_average: 8.8 },
  ]

const TopRatedPage = () => {
  const searchQuery = useSelector((state) => state.search.query);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  // Filter movies based on the search query
  const filteredMovies = topRatedMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  return (
    <div className="top-rated-page">
      <h1>Top Rated Movies</h1>
      {currentMovies.length > 0 ? (
        <MovieGrid movies={currentMovies} />
      ) : (
        <p>No movies found</p>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredMovies.length / moviesPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default TopRatedPage;
