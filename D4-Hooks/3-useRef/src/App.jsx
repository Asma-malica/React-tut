import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'


{/* Here whenever the value is typed in input box the component gets re rendered as in state variable the values are getting changed 
  This is the problem . so to overcome this problem we're using useRef Hook */}

// function App() {
//  const[input,setInput] = useState("")
//  console.log("Getting Rendered")

//   return (
//     <>
//     <h1>Input</h1>
//     <input type = "text" value = {input} onChange={(event) => setInput(event.target.value )}></input>
//     <h1>My name is {input}</h1>
//     </>
//   )
// }
// export default App


// Using useRef 

function App() {
  const[input,setInput] = useState("")
  const a = useRef();
  console.log("Getting Rendered")
  // here only when the show input button is clicked on that time only component gets rendered foe each input it wont get rendered the problem is fixed 
  const display=() =>{
    setInput(a.current.value)
    console.log(a.current.value)
  }
   return (
     <>
     <h1>Input</h1>
     {/* <input type = "text" value = {input} onChange={(event) => setInput(event.target.value )}></input> */}
     <input type = "text" ref = {a} ></input>
     <button onClick={display}>Show Input</button>
     <h1>My name is {input}</h1>
     </>
   )
 }
 export default App