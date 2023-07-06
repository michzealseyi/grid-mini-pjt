import React from "react";
import { Link } from "react-router-dom";
import Fbsvg from "./Svgs/Fbsvg";
import Igsvg from "./Svgs/Igsvg";
import Twittersvg from "./Svgs/Twittersvg";
import Skypesvg from "./Svgs/Skypesvg";

function Layout() {
  return (
    <div className="body">
      <main className="main">
        <header className="header">
          <h2>grid makes layout easy</h2>
        </header>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/hero" className="a">
                hero
              </Link>
            </li>
            <li>
              <Link to="/cards" className="a">
                cards
              </Link>
            </li>
            <li>
              <Link to="/tiles" className="a">
                tiles
              </Link>
            </li>
            <li>
              <Link to="/layout" className="a">
                layout
              </Link>
            </li>
          </ul>
        </nav>
        <section className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            consectetur quas tenetur ducimus exercitationem. Doloremque
            molestias dolorum sapiente voluptatem sit! Voluptas eius harum,
            animi eligendi ad consequatur? Dignissimos, excepturi autem officiis
            deserunt necessitatibus, dicta nisi veniam praesentium minima quas
            quod obcaecati facere illo earum. Veritatis a ab aut autem.
            Accusantium eum reiciendis molestiae deserunt quidem tempora culpa
            sint ipsam ea similique illum nam at sunt, nesciunt debitis sequi
            esse animi, cumque dolores reprehenderit dicta. Amet.
          </p>
        </section>
        <section className="sidebar">
          <span>
            <Fbsvg />
          </span>
          <span>
            <Igsvg />
          </span>
          <span>
            <Twittersvg />
          </span>
          <span>
            <Skypesvg />
          </span>
        </section>
        <div className="footer">
          <p>copyright &copy; all rights reserved</p>
        </div>
      </main>
      <li className="btn">
        <Link to="/" className="home-btn">
          back to home
        </Link>
      </li>
    </div>
  );
}

export default Layout;
