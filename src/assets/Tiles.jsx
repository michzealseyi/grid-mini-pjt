import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./size-image-1.jpeg";
import Image2 from "./size-image-2.jpeg";
import Image3 from "./size-image-3.jpeg";
import Image4 from "./size-image-4.jpeg";

function Tiles() {
  return (
    <div className="body">
      <section className="tiles">
        <div className="title">
          <h1>tiles layout</h1>
        </div>
        <div className="tiles-center">
          <article className="tile-1">
            <img src={Image1} alt="" />
          </article>
          <article className="tile-2">
            <img src={Image2} alt="" />
          </article>
          <article className="tile-3">
            <img src={Image3} alt="" />
          </article>
          <article className="tile-4">
            <img src={Image4} alt="" />
          </article>
          <article className="tile-5">
            <img src={Image1} alt="" />
          </article>
          <article className="tile-6">
            <img src={Image2} alt="" />
          </article>
          <article className="tile-7">
            <img src={Image3} alt="" />
          </article>
          <article className="tile-8">
            <img src={Image4} alt="" />
          </article>
          <article className="tile-9">
            <img src={Image1} alt="" />
          </article>
        </div>
      </section>
      <li className="btn">
        <Link to="/" className="home-btn">
          back to home
        </Link>
      </li>
    </div>
  );
}

export default Tiles;
