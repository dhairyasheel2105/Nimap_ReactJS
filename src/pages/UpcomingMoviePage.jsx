import { useState } from "react";
import { useSelector } from "react-redux";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";

const hardcodedMovies = [
  { id: 1, title: "Lightyear", poster_path: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", vote_average: 6.7 },
  { id: 2, title: "The Northman", poster_path: "https://image.tmdb.org/t/p/w500/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg", vote_average: 7.4 },
  { id: 3, title: "Elvis", poster_path: "https://image.tmdb.org/t/p/w500/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg", vote_average: 7.5 },
  { id: 4, title: "Bullet Train", poster_path: "https://image.tmdb.org/t/p/w500/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg", vote_average: 7.3 },
  { id: 5, title: "The Whale", poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", vote_average: 7.9 },
  { id: 6, title: "Madame Web", poster_path: "https://image.tmdb.org/t/p/w500/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg", vote_average: 0.0 },
  { id: 7, title: "The Hunger Games: The Ballad of Songbirds & Snakes", poster_path: "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg", vote_average: 0.0 },
  { id: 8, title: "Deadpool 3", poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", vote_average: 0.0 },
  { id: 9, title: "The Exorcist: Believer", poster_path: "https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg", vote_average: 0.0 },
  { id: 10, title: "Elio", poster_path: "https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg", vote_average: 0.0 },
  { id: 11, title: "Avatar 3", poster_path: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg", vote_average: 0.0 },
  { id: 12, title: "Guardians of the Galaxy Vol. 4", poster_path: "https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg", vote_average: 0.0 },
  { id: 13, title: "Spider-Man: Home Again", poster_path: "https://image.tmdb.org/t/p/w500/6zPLXnBFHzmKJ3lc0jIu8AnK4g4.jpg", vote_average: 0.0 },
  { id: 14, title: "Black Panther: Return of Wakanda", poster_path: "https://image.tmdb.org/t/p/w500/pFM5FZ8KPlTBW2h8yHCzqRXWDfb.jpg", vote_average: 0.0 },
  { id: 15, title: "The Batman: Shadows Rise", poster_path: "https://image.tmdb.org/t/p/w500/8AVbMxYpNRrPSzLAI5K13PUbpG9.jpg", vote_average: 0.0 }
];

const UpcomingMoviePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;
  const searchQuery = useSelector((state) => state.search.query);

  // Filter movies based on search query
  const filteredMovies = hardcodedMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const currentMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  return (
    <div className="upcoming-page">
      <h1>Upcoming Movies</h1>
      {currentMovies.length > 0 ? (
        <MovieGrid movies={currentMovies} />
      ) : (
        <p>No movies found.</p>
      )}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default UpcomingMoviePage;
