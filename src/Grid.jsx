import { Link } from "react-router-dom";
import React from "react";
import "./Grid.css";

function Grid() {
  return (
    <div className="body">
      <nav className="main-navbar">
        <ul>
          <li>
            <Link
              to="/hero"
              className="nav-link"
            >
              hero
            </Link>
          </li>
          <li>
            <Link
              to="/cards"
              className="nav-link"
            >
              cards
            </Link>
          </li>
          <li>
            <Link
              to="/tiles"
              className="nav-link"
            >
              tiles
            </Link>
          </li>
          <li>
            <Link
              to="/layout"
              className="nav-link"
            >
              layout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Grid;
