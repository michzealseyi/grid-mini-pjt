import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./size-image-1.jpeg";
import Image2 from "./size-image-2.jpeg";
import Image3 from "./size-image-3.jpeg";
import Image4 from "./size-image-4.jpeg";
import Fbsvg from "./Svgs/Fbsvg";
import Igsvg from "./Svgs/Igsvg";
import Twittersvg from "./Svgs/Twittersvg";
import Skypesvg from "./Svgs/Skypesvg";
function Cards() {
  return (
    <div className="body">
      <section className="cards">
        <div className="title">
          <h1>three column layout</h1>
        </div>
        <div className="cards-center">
          <article className="card">
            <img src={Image1} alt="" />
            <div className="card-info">
              <h3>card title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur doloremque corrupti libero explicabo fugiat
                dignissimos temporibus nulla velit, autem possimus maiores
                exercitationem accusantium dolorem ipsam fuga eius aliquam eum
                inventore voluptatem. Maxime tempora quibusdam ratione velit,
                autem at fugiat tempore reiciendis! Provident, vero soluta.
                Distinctio sunt rem expedita dignissimos eligendi!
              </p>
            </div>
            <div className="card-footer">
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
            </div>
          </article>
          <article className="card">
            <img src={Image2} alt="" />
            <div className="card-info">
              <h3>card title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati mollitia libero natus repellat ex ipsam ea? Expedita
                qui cupiditate obcaecati.
              </p>
            </div>
            <div className="card-footer">
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
            </div>
          </article>
          <article className="card">
            <img src={Image3} alt="" />
            <div className="card-info">
              <h3>card title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati mollitia libero natus repellat ex ipsam ea? Expedita
                qui cupiditate obcaecati.
              </p>
            </div>
            <div className="card-footer">
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
            </div>
          </article>
          <article className="card">
            <img src={Image4} alt="" />
            <div className="card-info">
              <h3>card title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati mollitia libero natus repellat ex ipsam ea? Expedita
                qui cupiditate obcaecati.
              </p>
            </div>
            <div className="card-footer">
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
            </div>
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

export default Cards;
