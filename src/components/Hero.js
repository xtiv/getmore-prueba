import React from "react";
import "../styles/style.css";
import backgroundImage from "../images/hero-img.png"
import { ReactComponent as RowIcon } from "../images/row.svg";
import { ReactComponent as BallIcon } from "../images/ball.svg";

const Hero = () => {
  return (
    <section className="hero-main">
      <img src={backgroundImage} className="img-bg" />
      <div className="ball-icon">
        <BallIcon />
      </div>
      <div className="hero-container">
        <h1>
          Las mejores raquetas para jugar <span>Tennis</span>
        </h1>
        <button>
          ACERCA DE NOSOTROS
          <RowIcon />
        </button>
      </div>
    </section>
  );
};

export default Hero;
