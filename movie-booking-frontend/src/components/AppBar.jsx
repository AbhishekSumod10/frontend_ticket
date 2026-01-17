function AppBar() {
  const showContact = () => {
    alert("Contact us for enquiry:\nmoviebooking@gmail.com");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#c4242b",
      color: "white"
    }}>
      <h2>🎬 Movie Booking</h2>
      <button
        onClick={showContact}
        style={{
          background: "white",
          color: "#c4242b",
          border: "none",
          padding: "8px 15px",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Contact Us
      </button>
    </div>
  );
}

export default AppBar;
