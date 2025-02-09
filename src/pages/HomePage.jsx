// import React, { useEffect, useState } from "react";
// import MovieCard from "../components/MovieCard";
// import MainHeader from "../components/Header";

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`
//     )
//       .then((response) => response.json())
//       .then((data) => setMovies(data.results));
//   }, [page]);

//   return (
//     <>
//       <MainHeader />
//       <div className="movie-list">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//       <div className="pagination">
//         <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
//           Previous
//         </button>
//         <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
//       </div>
//     </>
//   );
// };

// export default HomePage;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";

const popularMovies = [
  { id: 1, title: "Avatar: The Way of Water", poster_path: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg", vote_average: 8.2 },
  { id: 2, title: "Black Panther: Wakanda Forever", poster_path: "https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg", vote_average: 7.9 },
  { id: 3, title: "Thor: Love and Thunder", poster_path: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg", vote_average: 6.8 },
  { id: 4, title: "Minions: The Rise of Gru", poster_path: "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg", vote_average: 7.3 },
  { id: 5, title: "Jurassic World Dominion", poster_path: "https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg", vote_average: 6.4 },
  { id: 6, title: "Doctor Strange in the Multiverse of Madness", poster_path: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg", vote_average: 7.1 },
  { id: 7, title: "The Batman", poster_path: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", vote_average: 8.3 },
  { id: 8, title: "Everything Everywhere All at Once", poster_path: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg", vote_average: 8.4 },
  { id: 9, title: "Top Gun: Maverick", poster_path: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", vote_average: 8.6 },
  { id: 10, title: "Nope", poster_path: "https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg", vote_average: 7.0 },
  { id: 11, title: "Lightyear", poster_path: "https://image.tmdb.org/t/p/w500/fZFRUHuLzOgR5W3jd1Cnl37oy12.jpg", vote_average: 6.7 },
  { id: 12, title: "The Northman", poster_path: "https://image.tmdb.org/t/p/w500/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg", vote_average: 7.4 },
  { id: 13, title: "Elvis", poster_path: "https://image.tmdb.org/t/p/w500/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg", vote_average: 7.5 },
  { id: 14, title: "Bullet Train", poster_path: "https://image.tmdb.org/t/p/w500/1ikWtAHTs2GLPaPDxO4oApb4fTL.jpg", vote_average: 7.3 },
  { id: 15, title: "The Whale", poster_path: "https://image.tmdb.org/t/p/w500/dvNEtjX7stA6DRhVR8Fqsddhqq.jpg", vote_average: 7.9 },
];

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;
  const searchQuery = useSelector((state) => state.search.query);

  const filteredMovies = searchQuery
    ? popularMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularMovies;

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const currentMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="home-page">
      <h1>Popular Movies</h1>
      <MovieGrid movies={currentMovies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;

