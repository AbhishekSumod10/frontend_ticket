import { useEffect, useState } from "react";

function BookingPopup({ user, close }) {
  const [bookings, setBookings] = useState([]);

  const loadBookings = () => {
    fetch(`http://localhost:8080/bookings/${user.phoneNumber}`)
      .then(res => res.json())
      .then(data => setBookings(data));
  };

  useEffect(() => {
    loadBookings();
  }, [user.phoneNumber]);

  const cancelBooking = (id) => {
    fetch(`http://localhost:8080/bookings/cancel/${id}`, {
      method: "PUT"
    }).then(() => {
      loadBookings();
    });
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <h3>Your Bookings</h3>

        {bookings.length === 0 && <p>No bookings yet</p>}

        {bookings.map(b => (
          <div
            key={b.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px"
            }}
          >
            <div>
              <div>{b.customerName}</div>
              <div>{b.tickets} tickets</div>
              <div>{b.status}</div>
            </div>

            {b.status === "Booked" && (
              <button
                style={{
                  background: "#c4242b",
                  color: "white",
                  border: "none",
                  padding: "4px 8px",
                  height: "30px"
                }}
                onClick={() => cancelBooking(b.id)}
              >
                Cancel
              </button>
            )}
          </div>
        ))}

        <button className="cancel" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}

export default BookingPopup;
