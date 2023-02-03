import React from "react";
import ReactDom from "react-dom/client";
import { Greeting1, Usuario, Greeting5, Greeting6, Tarjeta } from "./Greeting1";
import Producto from "./Producto";
import {Button} from "./Button";
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
    <Greeting5 name="Ceci" edad={36} />
    <Greeting6 name="Maxi" edad={32} />
    <Tarjeta
      name="Maxi"
      age={32}
      married={false}
      points={[15, 20, 50.2]}
      address={{ street: " Balcarce 179", city: "Tucuman" }}
      Greet={function(){alert("Hello World")}}
    />
    <Button text= "Click me" />
    <Button text= "Pay"/>
    <Button text= {true} name= "Maxi"/>
  </>
);
