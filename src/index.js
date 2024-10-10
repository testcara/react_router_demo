import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Student from "./StudentPage/student";
import BookStore from "./BookPage/bookStore";
import Book from "./BookPage/book";

function App() {
  return (
    <Router>
      <div>
        <h1>Index</h1>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home page</Link>
            </li>
            <li>
              <Link to="/bookstore">BookStore page</Link>
            </li>
            <li>
              <Link to="/student">Student page</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/bookstore" element={<BookStore />}>
          <Route path="book" element={<Book />} />
        </Route>
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
