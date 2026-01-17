import { useEffect, useState } from "react";
import seatImage from "../assets/seat-arrangement.png";

function BookingModal({ movieId, user, close }) {
  const [movie, setMovie] = useState(null);
  const [tickets, setTickets] = useState(1);
  const [showSeatInfo, setShowSeatInfo] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then(res => res.json())
      .then(data => {
        const m = data.find(x => x.id === movieId);
        setMovie(m);
      });
  }, [movieId]);

  if (!movie) return null;

  const book = () => {
    fetch("http://localhost:8080/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        movieId: movie.id,
        customerName: user.username,     
        phoneNumber: user.phoneNumber, 
        tickets
      })
    }).then(() => {
      alert("✅ Booking Confirmed");
      close();
    });
  };

  return (
    <>
     
      <div className="modal-bg">
        <div className="modal">
          <h3>{movie.title}</h3>

          <div className="seat-row">
            <span>Available: {movie.availableSeats}</span>

            <input
              type="number"
              min="1"
              max={movie.availableSeats}
              value={tickets}
              onChange={e => setTickets(Number(e.target.value))}
            />

            <button
              className="info-btn"
              onClick={() => setShowSeatInfo(true)}
            >
              ℹ️ seat info
            </button>
          </div>

          <button
            className="confirm"
            disabled={tickets > movie.availableSeats}
            onClick={book}
          >
            Confirm Booking
          </button>

          <button className="cancel" onClick={close}>
            Cancel
          </button>
        </div>
      </div>
      {showSeatInfo && (
        <div className="modal-bg">
          <div className="modal" style={{ width: "380px" }}>
            <h3>Seat Arrangement</h3>

            <img
              src={seatImage}
              alt="Seat Arrangement"
              style={{ width: "100%", borderRadius: "6px" }}
            />

            <button
              className="confirm"
              onClick={() => setShowSeatInfo(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingModal;
