import React from "react";
import { ReactComponent as LinkedIn } from "../images/linkedin.svg";
import { ReactComponent as Vimeo } from "../images/vimeo.svg";
import { ReactComponent as Instagram } from "../images/insta.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as BallIcon } from "../images/ball.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <a href="#">Inicio</a>
        <a href="#">Acerca de nosotros</a>
        <a href="#">Historia</a>
        <a href="#">Contacto</a>
      </div>
      <div className="footer-social-icons">
        <a href="#">
            <LinkedIn />
        </a>
        <a href="#"> 
            <Vimeo />
        </a>
        <a href="#">
            <Instagram />
        </a>
        <a href="#">
            <Twitter />
        </a>
        <a href="#">
            <Facebook />   
        </a>
      </div>
      <span>
        <BallIcon />
      </span>
    </footer>
  );
};

export default Footer;
