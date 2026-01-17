import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h2>Movies</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {movies.map(movie => (
          <div
            key={movie.id}
            style={{
              width: "220px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px"
            }}
          >
            <img
              src={movie.imageUrl}
              alt={movie.title}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />

            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>{movie.duration} mins</p>
            <p>⭐ {movie.rating}</p>

            <button onClick={() => setSelectedMovie(movie)}>
              Book Ticket
            </button>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <BookingModal
          movie={selectedMovie}
          close={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default MovieList;
