export function Greeting1() {
  return (
    <div>
      <h1> Este es un componente</h1>
      <p> Lorem 123</p>
    </div>
  );
}

export function Usuario() {
  return <h1>Usuario</h1>;
}

export function Greeting5(props) {
  return (
    <>
      <h1> Hola {props.name} </h1>
      <h1> mi edad es {props.edad}</h1>
    </>
  );
}
export function Greeting6({name , edad}) {
  return (
    <>
      <h1> Hola {name} </h1>
      <h1> mi edad es {edad}</h1>
    </>
  );
}
export function Tarjeta(props){
  console.log(props)
  
   return (
    <>
    <h1> Name: {props.name} - {props.married === true? "married" : "single"} </h1> 
    <ul>
      <li>Street: {props.address.street} </li>
      <li>City: {props.address.city} </li>
      
    </ul>
    <p> Age: {props.age}</p>
    <p>Points: {props.points}</p>
    </>
   )                          

 
}