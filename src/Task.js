//  export function TaskCard(){
//     return<div style={{
//         background : '#202020',
//         color: '#fff',
//         padding: '20px'
//     }}>
//         <h1 style= {{
//             fontWeight : 'lighter'
//         }}> Mi primer Tarea</h1>
//         <p> Tarea Realizada</p>
//     </div>
// }

import './task.css'

export function TaskCard({ready}){
    return(
    <div className= 'card'>
        <h1 > Mi primer Tarea</h1>
        <span className={ready ? 'bg-green' : 'bg-red'}>
        { ready  ? "Tarea Realizada" : "Tarea pendiente"}
        </span>
    </div>);
}