import React from "react";
import ReactDom from "react-dom/client";
import { Greeting1, Usuario } from "./Greeting1";
import Producto from "./Producto";

const root = ReactDom.createRoot(document.getElementById("root"));

// 3 formas distintas de llamar una funcion (greeting)

function Greeting2() {
  const married = false;
  return <h1>{married ? "estoy casado" : "no estoy casado"} </h1>;
}

function Greeting3() {
  const user = {
    firstname: "Joe",
    lastname: "Macmillan",
  };
  return (
    <div>
      <h1>{user.firstname}</h1>
      <h3>{user.lastname}</h3>
    </div>
  );
}

function Greeting4() {
  function add(x, y) {
    return x + y;
  }
  return <h1> {add(10, 30)}</h1>;
}

root.render(
  <>
    <Greeting1 />
    <Greeting2></Greeting2>
    {Greeting3()}
    <Greeting4 />
    <Usuario />
    <Producto />
  </>
);
