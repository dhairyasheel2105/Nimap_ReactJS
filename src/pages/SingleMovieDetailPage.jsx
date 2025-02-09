import { useState } from "react";
import "../styles/SingleMovieDetailPage.css";

const movieDetails = {
  id: 1,
  title: "Interstellar",
  overview:
    "A group of astronauts travels through a wormhole in search of a new habitable planet.",
  release_date: "2014-11-07",
  genres: [{ id: 1, name: "Sci-Fi" }, { id: 2, name: "Adventure" }],
  poster_path:
    "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  vote_average: 8.6,
  cast: [
    {
      id: 1,
      name: "Matthew McConaughey",
      character: "Cooper",
      profile_path: "https://livetalksla.org/wp-content/uploads/2023/07/MMc.jpg",
    },
    {
      id: 2,
      name: "Anne Hathaway",
      character: "Brand",
      profile_path: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRk0KwzceCH92Os7xhWx9wUHHacwue2y8HJEVB85nDQPka62m7SCuxAEE4ywpg_k6BvRbkE3QlZUb6bY2SqSwePZw",
    },
    {
      id: 3,
      name: "Jessica Chastain",
      character: "Murph",
      profile_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Jessica_Chastain_Cannes_2016_4_%28cropped%29.jpg/330px-Jessica_Chastain_Cannes_2016_4_%28cropped%29.jpg",
    },
    {
      id: 4,
      name: "Michael Caine",
      character: "Professor Brand",
      profile_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtL9TLOQqiUTdRBg4S9YeTmUeTg5vQMgMToX1nrrdkzIc0vYRm9KfBmOKCY2Jex4GtLQ3l3ZErBvZW9BpjOv8U0g",
    },
    {
      id: 5,
      name: "Matt Damon",
      character: "Dr. Mann",
      profile_path: "https://ntvb.tmsimg.com/assets/assets/44333_v9_bc.jpg?w=360&h=480",
    },
    {
      id: 6,
      name: "John Lithgow",
      character: "Donald",
      profile_path: "https://s.yimg.com/zb/imgv1/948d00a3-7e2e-318f-88cf-f1953a58b4fb/t_500x300",
    },
  ],
};

const SingleMovieDetailPage = () => {
  const [movie] = useState(movieDetails);

  return (
    <div className="movie-detail-page">
      <div className="movie-header">
        <img className="poster" src={movie.poster_path} alt={movie.title} />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div className="movie-cast">
        <h2>Cast</h2>
        <div className="cast-grid">
          {movie.cast.map((member) => (
            <div key={member.id} className="cast-member">
              <img className="cast-img" src={member.profile_path} alt={member.name} />
              <p className="cast-name">{member.name}</p>
              <p className="cast-character">{member.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDetailPage;
