import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Components/Menu/index";
import RoutesWeb from "./Components/Routes/Routes";

function App() {
  const [opciones, setOpciones] = useState([
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/login",
      label: "Login",
    },
    {
      path: "/registro",
      label: "Registro",
    },
  ]);

  const handleClick = () => {
    setOpciones([
      {
        path: "/",
        label: "Home",
      },
    ]);
  };

  return (
    <BrowserRouter>
      <Menu data={opciones} />
      <RoutesWeb />
    </BrowserRouter>
  );
}

export default App;
