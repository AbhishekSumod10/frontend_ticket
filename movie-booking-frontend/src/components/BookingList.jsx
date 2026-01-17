import { useEffect, useState } from "react";

function BookingList({ user }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/bookings/${user.phone}`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, [user.phone]);

  const cancelBooking = (id) => {
    fetch(`http://localhost:8080/bookings/cancel/${id}`, {
      method: "PUT"
    }).then(() => {
      setBookings(prev =>
        prev.map(b =>
          b.id === id ? { ...b, status: "Cancelled" } : b
        )
      );
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Your Bookings</h3>

      {bookings.length === 0 && <p>No bookings yet</p>}

      {bookings.map(b => (
        <div key={b.id}>
          {b.customerName} - {b.status}
          {b.status === "Booked" && (
            <button onClick={() => cancelBooking(b.id)}>
              Cancel
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default BookingList;
