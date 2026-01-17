import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AppBar from "./components/AppBar";
import MovieList from "./components/MovieList";
import BookingPopup from "./components/BookingPopup";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [showBookings, setShowBookings] = useState(false);

  // 🔐 IF USER NOT LOGGED IN → SHOW LOGIN / REGISTER
  if (!user) {
    return page === "login" ? (
      <Login
        setUser={setUser}
        goToRegister={() => setPage("register")}
      />
    ) : (
      <Register
        goToLogin={() => setPage("login")}
      />
    );
  }
  return (
    <>
      <AppBar
        onBookingsClick={() => setShowBookings(true)}
        onLogout={() => {
          setUser(null);          
          setShowBookings(false); 
          setPage("login");      
        }}
      />

      <div className="content">
        <MovieList user={user} />
      </div>

      {showBookings && (
        <BookingPopup
          user={user}
          close={() => setShowBookings(false)}
        />
      )}
    </>
  );
}

export default App;
