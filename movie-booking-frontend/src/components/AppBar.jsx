function AppBar({ onBookingsClick, onLogout }) {
  const showContact = () => {
    alert("📧 Contact us for enquiries:\nmoviebooking@gmail.com");
  };

  return (
    <div className="appbar">
      <h2>Movie Time</h2>

      <div className="appbar-actions">
        <button onClick={showContact}>Contact Us</button>
        <button onClick={onBookingsClick}>Your Bookings</button>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default AppBar;
