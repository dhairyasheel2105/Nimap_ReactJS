import { Link } from "react-router-dom"
import "../styles/MovieGrid.css";

const MovieGrid = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
        </Link>
      ))}
    </div>
  )
}

export default MovieGrid

