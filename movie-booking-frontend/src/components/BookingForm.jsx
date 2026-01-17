import { useState } from "react";

function BookingForm() {
  const [form, setForm] = useState({
    movieId: "",
    customerName: "",
    tickets: ""
  });

  const submit = () => {
    fetch("http://localhost:8080/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
  };

  return (
    <div>
      <h2>Book Ticket</h2>
      <input placeholder="Movie ID" onChange={e => setForm({...form, movieId: e.target.value})} />
      <input placeholder="Name" onChange={e => setForm({...form, customerName: e.target.value})} />
      <input placeholder="Tickets" onChange={e => setForm({...form, tickets: e.target.value})} />
      <button onClick={submit}>Book</button>
    </div>
  );
}

export default BookingForm;
