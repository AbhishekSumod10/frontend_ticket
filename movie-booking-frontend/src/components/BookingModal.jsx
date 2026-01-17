import { useState } from "react";

function BookingModal({ movie, close }) {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("");

  const bookTicket = () => {
    fetch("http://localhost:8080/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        movieId: movie.id,
        customerName: name,
        tickets: tickets
      })
    }).then(() => close());
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)"
    }}>
      <div style={{
        background: "#fff",
        padding: "20px",
        width: "300px",
        margin: "120px auto",
        borderRadius: "8px"
      }}>
        <h3>Book: {movie.title}</h3>

        <input
          placeholder="Your Name"
          onChange={e => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Tickets"
          onChange={e => setTickets(e.target.value)}
        />
        <br /><br />

        <button onClick={bookTicket}>Confirm</button>
        <button onClick={close} style={{ marginLeft: "10px" }}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default BookingModal;
