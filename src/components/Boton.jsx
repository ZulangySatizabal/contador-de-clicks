import React from "react";
import "../css/Boton.css";

function Boton({ texto, esBotonClick, manejarClick }) {
  return (
    
      <button
        className={esBotonClick ? "boton_click" : "boton_reiniciar"}
        onClick={manejarClick}
      >
        {texto}
      </button>
  
  );
}

export default Boton;
