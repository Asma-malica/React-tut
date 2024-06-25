import React, { useEffect } from 'react'
import { useState , useMemo} from 'react';


const App = () => {
  const [num,setNum] = useState(0);
  const[dark,setDark] = useState(false)

  // useMemo  --> its returns the value 
  const doubleNum = useMemo(()=>
  {
    return  slowfunc(num);
  },[num])

  // with the help of this slow func will be called only in doublenum 
  // by using the concept of memoization 
  // this can also be done using useEffect which requires one additional state variable 
  // but state variable should not be used often as it consumes lots of memory 
 
  // useEffect 
  // const [doubleNum,setDoubleNum] = useState(0);
  // useEffect(()=>{
  //   setDoubleNum(slowfunc(num));
  // },[num]);
  
// -------------------------------------------------------- 
//   const themestyle = {
//   backgroundColor : dark ? "black" : "white",
//   color : dark ? "white" : "black",
//  }

// useEffect(()=>{
//   console.log("Theme Changed")
//  },[themestyle])


// if we give like this each time while running double num
//  theme changed will also get displayed though the color didnt change 
// this can also be avoided using useMemo 
// instead of giving like above const themestyle and useEffect we can prefer useMemo which is written below 

const themestyle = useMemo(()=>{
  return {
    backgroundColor : dark ? "black" : "white",
    color : dark ? "white" : "black",

  }
},[dark])

 useEffect(()=>{
  console.log("Theme Changed")
 },[themestyle])



  return (
    <div>
      <input type = "number" value = {num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <div style = {themestyle}>{doubleNum}</div>
    </div>
  )
}
export default App;

function slowfunc(num)
{
  console.log("running slow")
  for(let i=0;i<1000000000;i++){}
    return num * 10 ;
}

// ---------------------------------------------------------------------------------------------

// the slowfunc actually should work only for double num but its working for toggle theme also 
// which can be overcome by the concept of useMemo 

// const App = () => {
//   const [num,setNum] = useState(0);
//   const[dark,setDark] = useState(false)

//   const doubleNum = slowfunc(num);
//   const themestyle = {
//   backgroundColor : dark ? "black" : "white",
//   color : dark ? "white" : "black",
//  }

//   return (
//     <div>
//       <input type = "number" value = {num} onChange={(e) => setNum(e.target.value)} />
//       <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
//       <div style = {themestyle}>{doubleNum}</div>
//     </div>
//   )
// }
// export default App;

// function slowfunc(num)
// {
//   console.log("running slow")
//   for(let i=0;i<100000000;i++){}
//     return num * 2 ;
// }