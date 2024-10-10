import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routes";

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
              <Link to="/users">Users page</Link>
            </li>
            <li>
              <Link to="/about">About page</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children
              ? route.children.map((child, childIndex) => (
                  <Route
                    key={childIndex}
                    path={child.path}
                    element={child.element}
                  />
                ))
              : null}
          </Route>
        ))}
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
