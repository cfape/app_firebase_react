import React from "react";
import styled from "styled-components";
import "./App.css";
import Formulario from "./componentes/Formulario";
import ListaContactos from "./componentes/ListaContactos"

function App() {
  return (
    <Contenedor>
      <Titulo>Lista de Contactos</Titulo>
      <Formulario />
			<ListaContactos />
    </Contenedor>
  );
}

const Contenedor = styled.div`
  margin: 40px;
  width: 90%;
  max-width: 400px;
  background: #fff;
  padding: 40px;
  border-radius: 5px;
  text-align: center;
`;

const Titulo = styled.h2`
  margin-bottom: 10px;
`;

export default App;
