import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [numClick, setNumClicks] = useState(0)

  const manejarClick = () => {
    setNumClicks(numClick+1)
  }

  const reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClick} />
        <Boton 
        texto='Click'
        botonClick={true}
        manejarClick={manejarClick}/>
        <Boton 
        texto='Reiniciar'
        botonClick={false}
        manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
