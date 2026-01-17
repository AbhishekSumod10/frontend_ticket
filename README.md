🎬 Movie Ticket Booking System – Frontend

📌 Project Description
This is the frontend application for the Movie Ticket Booking System, developed using React (Vite + JSX). It provides a clean and interactive user interface that allows users to register, log in, browse movies, book tickets, view their bookings, and cancel bookings.
The frontend communicates with the Spring Boot backend using REST APIs and displays real-time seat availability to ensure a smooth booking experience.

🛠️ Technology Stack
React (Vite + JSX) for building UI components
JavaScript for application logic
HTML5 for page structure
CSS3 for styling and layout
Fetch API for backend communication

📂 Project Structure
src
│
├── components      - Reusable UI components
├── App.jsx         - Main application component
├── main.jsx        - Application entry point
├── App.css         - Global styles
└── index.html

⚙️ Prerequisites
Make sure the following are installed on your system:
Node.js (v18 or higher)
npm or yarn
Git

▶️ How to Run the Frontend
Clone the repository and navigate to the frontend directory:
git clone https://github.com/your-username/movie-ticket-booking.git
cd frontend
npm install
npm run dev


The frontend application will start at:
http://localhost:5173

🧭 Application Pages
🔐 Login Page
The login page allows users to sign in using their username and phone number. If the user does not exist, the application redirects them to the registration page.

📝 Register Page
The registration page allows new users to create an account. It uses the same layout and input sizes as the login page to maintain UI consistency.

🎞️ Movie Listing Page
This page displays available movies in horizontally scrollable cards. Each card shows:

Movie image
Title
Genre
Duration
Rating
Available seats

🎟️ Booking Modal
When the user clicks the Book button, a modal opens where they can:
Enter the number of tickets
View current seat availability
View the seat arrangement image

📋 Your Bookings
This section displays only the bookings of the logged-in user and allows users to cancel bookings when needed.

🧠 State Management
React useState and useEffect hooks are used for managing application state
Logged-in user data is stored in component state
Logging out clears the state and redirects the user to the login page

🔗 Backend API Integration
The frontend communicates with the backend running at:
http://localhost:8080
Example API Call – Fetch Movies
useEffect(() => {
  fetch("http://localhost:8080/movies")
    .then(res => res.json())
    .then(data => setMovies(data));
}, []);

🎨 Styling and UI Design
Custom CSS is used for styling
Fixed AppBar with scrollable content area
Responsive layout for different screen sizes
Consistent design for login and registration pages
Small, clean movie cards inspired by popular booking platforms

⚠️ Error Handling
Input validation for empty fields
Booking disabled when seats are unavailable
Proper messages shown for invalid actions

🚀 Future Enhancements
Persistent login using localStorage
Role-based access control (Admin / User)
Seat selection user interface
Improved notifications and error handling

👨‍💻 Author
Abhishek Sumod
Movie Ticket Booking System – Frontend
