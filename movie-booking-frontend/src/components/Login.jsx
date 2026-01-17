import { useState } from "react";

function Login({ setUser, goToRegister }) {
  const [error, setError] = useState("");

  const login = () => {
    const username = document.getElementById("username").value;
    const phoneNumber = document.getElementById("phone").value;

    if (!username || !phoneNumber) {
      setError("Please fill all fields");
      return;
    }

    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, phoneNumber })
    })
      .then(res => res.json())
      .then(user => {
        if (!user) {
          setError("User not found. Please register.");
        } else {
          setError("");
          setUser(user);
        }
      });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Movie Booking</h2>
        <p className="subtitle">Login to continue</p>

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

        <button className="primary-btn" onClick={login}>
          Login
        </button>

        <p className="divider">or</p>

        <button className="secondary-btn" onClick={goToRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
