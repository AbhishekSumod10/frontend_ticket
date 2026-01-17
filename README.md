Movie Ticket Booking System – Frontend
Project Description

This is the frontend application for the Movie Ticket Booking System, developed using React and Vite.
It provides a user-friendly interface for users to register, log in, browse movies, book tickets, view their bookings, and cancel bookings.

The frontend communicates with the Spring Boot backend using REST APIs and displays real-time seat availability updates.

Technology Stack

React (Vite + JSX)

JavaScript

HTML5

CSS3

Fetch API

Project Structure
src
│
├── components      - Reusable UI components
├── App.jsx         - Main application component
├── main.jsx        - Application entry point
├── App.css         - Global styles
└── index.html

Prerequisites

Ensure the following are installed on your system:

Node.js (v18 or higher recommended)

npm or yarn

Git

How to Run the Frontend

Clone the repository and navigate to the frontend directory:

git clone https://github.com/your-username/movie-ticket-booking.git
cd frontend
npm install
npm run dev


The frontend application will start at:

http://localhost:5173

Application Pages
Login Page

Allows users to log in using username and phone number

Redirects to registration page if the user does not exist

Register Page

Allows new users to create an account

Uses the same layout and input sizes as the login page

Movie Listing Page

Displays movies in horizontally scrollable cards

Shows movie image, title, genre, duration, rating, and available seats

Booking Modal

Opens when the user clicks the Book button

Allows users to enter the number of tickets

Displays seat availability and seat layout image

Your Bookings

Displays bookings for the logged-in user only

Allows users to cancel bookings

State Management

React useState and useEffect hooks are used for state management

Logged-in user data is stored in component state

Logout clears user state and redirects to the login page

Backend API Integration

The frontend communicates with the backend running at:

http://localhost:8080

Example API Call (Fetch Movies)
useEffect(() => {
  fetch("http://localhost:8080/movies")
    .then(res => res.json())
    .then(data => setMovies(data));
}, []);

Styling and UI

Custom CSS is used for styling

Responsive layout with fixed AppBar and scrollable content

Consistent design for login and registration pages

Small, clean movie cards similar to popular booking platforms

Error Handling

Basic validation for empty inputs

Disabled booking when seats are unavailable

Displays appropriate messages for invalid actions

Future Enhancements

Persistent login using localStorage

Role-based access (Admin / User)

Seat selection UI

Improved error handling and notifications

Author

Abhishek
Movie Ticket Booking System – Frontend
