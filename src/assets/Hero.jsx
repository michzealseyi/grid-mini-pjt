import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="body">
      <header className="hero-header">
        <div className="hero-banner">
          <h1>welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            illum iste officiis debitis vitae soluta.
          </p>
        </div>
      </header>
      <li className="btn">
        <Link to="/" className="home-btn">
          back to home
        </Link>
      </li>
    </div>
  );
}

export default Hero;
