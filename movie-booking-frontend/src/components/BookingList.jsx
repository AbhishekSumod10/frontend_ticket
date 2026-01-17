import { useEffect, useState } from "react";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/bookings")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      {bookings.map(b => (
        <div key={b.id}>
          {b.customerName} - {b.status}
        </div>
      ))}
    </div>
  );
}

export default BookingList;
