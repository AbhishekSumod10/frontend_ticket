import { useState } from "react";

function Register({ goToLogin }) {
  const [error, setError] = useState("");

  const register = () => {
    const username = document.getElementById("username").value;
    const phoneNumber = document.getElementById("phone").value;

    if (!username || !phoneNumber) {
      setError("Please fill all fields");
      return;
    }

    fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, phoneNumber })
    })
      .then(res => res.json())
      .then(() => {
        alert("Registration successful. Please login.");
        goToLogin();
      });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>🎬 Movie Booking</h2>
        <p className="subtitle">Create a new account</p>

        <input
          id="username"
          type="text"
          placeholder="Username"
        />

        <input
          id="phone"
          type="tel"
          placeholder="Phone Number"
        />

        {error && <p className="error-text">{error}</p>}

        <button className="primary-btn" onClick={register}>
          Register
        </button>

        <p className="divider">or</p>

        <button className="secondary-btn" onClick={goToLogin}>
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Register;
