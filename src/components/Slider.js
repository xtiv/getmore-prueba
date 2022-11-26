import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Assets
import raquetaImg from "../images/raqueta.png";
import ballImg from "../images/ball-slider.png";
import "@splidejs/react-splide/css";


const Slider = () => {
  {/* Aqui se haria el query de los datos (imagenes) */}
  const raquetas = [raquetaImg, raquetaImg, raquetaImg, raquetaImg, raquetaImg];
  return (
    <section className="splide-main">
      <div className="splide-container">
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
          }}
          aria-label="Balls"
        >
          <SplideSlide>
            <img src={ballImg} alt="raqueta" />
            <div className="card-description">
              <h3 className="title-slider">Nuestras<br/>
                <span>Raquetas</span>
              </h3>
              <p className="card-p">
                Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img src={raquetaImg} alt="raqueta" />
          </SplideSlide>
        </Splide>
      </div>
      <div className="carousel-container">
        <Splide
          className="slide-carousel"
          options={{
            rewind: true,
            type: "slide",
            perPage: 2,
            perMove: 1,
            drag   : 'free',
            gap: 36,
            padding: '5rem',
            width: '60%',
            fixedWidth : '288px',
            fixedHeight: '344px',
            mediaQuery: 'max',
            breakpoints: {
              1024: {
                width: '100vw',
              },
              495: {
                perPage: 1,
                padding: '2rem',
                drag   : 'false',
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {raquetas.map((element, index) => {
            const list = (
            <>
              <SplideSlide>
                <img src={element} alt="raqueta" />
                <span className="index-carousel " style={{color:"#000000"}}> {index +1} </span>
              </SplideSlide>
              
            </>
            );

            return list;
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Slider;
