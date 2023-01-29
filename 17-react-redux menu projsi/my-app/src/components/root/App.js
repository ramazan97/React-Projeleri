import React from "react";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import { Route, useLocation } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  let location = useLocation();
  switch (location.pathname) {
    case "/":
      return(<Container><Navi /><Dashboard /></Container>)  

    case "/product":
      return <Dashboard />;
    case "/cart":
      return <CartDetail />;
    default:
      return <Dashboard />;
  }
}

// function App() {
//   return (
//     <Container>
//       <Navi />
//       <Dashboard />
//       <CartDetail/>
//     </Container>
//   );
// }

export default App;
