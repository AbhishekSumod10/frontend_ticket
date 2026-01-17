import { useEffect, useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      {movies.map(m => (
        <div key={m.id}>
          {m.title} - {m.genre}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
