import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Components/Menu/index";
import RoutesWeb from "./Components/Routes/Routes";
import GlobalState from "./Context/GlobalState";
function App() {
  const [opciones, setOpciones] = useState([
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/registro",
      label: "Register",
    },
    {
      path: "/login",
      label: "Login",
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
    <GlobalState>
      <BrowserRouter>
        <Menu data={opciones} />
        <RoutesWeb />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
