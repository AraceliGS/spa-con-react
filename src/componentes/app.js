import React from 'react';
import Header from './header';
import Section from './section';

const dataObject = {
  titulo: "Esto es mi spa de React",
  url: "react.png",
  parrafo: "Libreria de js que me permita trabajar las vistas de mi spa.",
  contenido: "Si quiero llegar a realizar single page applications potentes debo conocer:",
  items: ['Redux', 'Redux-Router', 'Js', 'DOM'],
  active: true
}

const App = () => {
  return <div>
    <Header 
    title={dataObject.titulo}
    url={dataObject.url}
    paragraph={dataObject.parrafo}
    />
    <Section 
    arrayCursos={dataObject.items}
    contenido={dataObject.contenido}
    isActive={dataObject.active}
    />
  </div>
}


export default App;