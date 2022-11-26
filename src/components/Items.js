import React from "react";
import "../styles/style.css";
import { ReactComponent as RowIcon } from "../images/row.svg";

const Items = () => {
  return (
    <section className="items-main">
      <div className="items-container">
        <div className="sup-items">
            <p>
                TENNIS
            </p>
            <h2>
            Raquetas.Accesorios .Pelotas.
            </h2>
        </div>
        <p className="items-description">
            Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.
        </p>
      </div>
      <button>
          HISTORIA
          <RowIcon />
      </button>
    </section>
  );
};

export default Items;