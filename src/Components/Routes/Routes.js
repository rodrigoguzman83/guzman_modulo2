import { Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Registro from "../../Pages/Register";
import Login from "../../Pages/Login";
import ProductoDetalle from "../../Pages/DetailsProduct";
function Routes() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/registro" exact component={Registro} />
      <Route path="/productos/:id" exact component={ProductoDetalle} />
    </>
  );
}

export default Routes;
