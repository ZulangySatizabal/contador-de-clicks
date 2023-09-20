import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import Footer from "./components/Footer/Footer";
import logoClicker from "./img/cursor_icon.svg";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const contarClick = () => {
    setNumClicks(numClicks + 1);
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="container_logo">
        <img className="logo__clicker" src={logoClicker} alt="clicker logo" />
        <h1>Contador de Clicks</h1>
      </div>
      <div className="container_contador">
        <Contador numClicks={numClicks} />
        <div className="container_button">
          <Boton texto="Click" esBotonClick={true} manejarClick={contarClick} />
          <Boton
            texto={"Reiniciar"}
            esBotonClick={false}
            manejarClick={reiniciarContador}
          />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
