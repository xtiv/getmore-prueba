import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import raquetaImg from "../images/raqueta.png";
import ballImg from "../images/ball-slider.png";

// CSS
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
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img src={ballImg} alt="Image 1" />
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
            <img src={raquetaImg} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={ballImg} alt="Image 3" />
          </SplideSlide>
          <SplideSlide>
            <img src={raquetaImg} alt="Image 2" />
          </SplideSlide>  
        </Splide>
      </div>
      <div className="carousel-container">
        <Splide
          options={{
            rewind: true,
            type: "slide",
            perPage: 3,
            perMove: 1,
            gap: 36,
          }}
          aria-label="My Favorite Images"
        >
          {raquetas.map((element, index) => {
            const list = (
            <>
              <SplideSlide>
                <img src={element} alt="Image raqueta" />
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
