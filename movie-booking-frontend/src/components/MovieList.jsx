import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";

function MovieList({ user }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const loadMovies = () => {
    fetch("http://localhost:8080/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="section">
      <h3>Now Showing</h3>

      <div className="movie-row">
        {movies.map(movie => (
          <div className="movie-card vertical-card" key={movie.id}>
            
          
            <img src={movie.imageUrl} alt={movie.title} />

            <h4 className="movie-title">{movie.title}</h4>

        
            <div className="movie-details">
              <p className="movie-text">🎭 {movie.genre}</p>
              <p className="movie-text">⏱ {movie.duration} mins</p>
              <p className="movie-text">⭐ {movie.rating}</p>
              <p className="movie-text seats">
                Seats: {movie.availableSeats}
              </p>

              <button
                className="book-btn"
                disabled={movie.availableSeats === 0}
                onClick={() => setSelectedMovie(movie)}
              >
                {movie.availableSeats === 0 ? "Sold Out" : "Book"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <BookingModal
          movieId={selectedMovie.id}
          user={user}
          close={() => {
            setSelectedMovie(null);
            loadMovies();
          }}
        />
      )}
    </div>
  );
}

export default MovieList;
