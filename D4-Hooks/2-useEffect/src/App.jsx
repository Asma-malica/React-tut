import React, { useEffect, useState } from 'react';

// //Two use of useEffect
// ..If we want to load some data initially 
// ..After the update has happened new data will be AudioDestinationNode(ie trigger movement)

// whenever the array is given value if the array gets updated useEffect will be called 
function App() {
  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(1000);

  useEffect(() => {
    // setNum1(200);
    
  return()=>{
    setNum1(100)
    console.log("Memory cleaned")
  };


    console.log("From Use Effect");
  }, [num1,num2]); //here both   num1 & num2 value gets updated means  useEffect will run
  // }, [num1]); // if num1 value gets updated means only useEffect will run
  // console.log("num 1 is ",num1)
  // console.log("num 2 is ",num2)



  return (
    <>
      <h1>{num1}</h1>
      <button onClick={() => setNum1((curr) => curr + 1)}>ADD</button>
      <h1>{num2}</h1>
      <button onClick={() => setNum2((curr) => curr + 1)}>ADD</button>
    </>
  );
}

export default App;







// when array is empty the useEffect runs only one time 
// and in output it prints two time one is development server o/p and react app actual code o/p
// but in real time when the app completes only one o/p will come 

// function App() {
//   const [num, setNum] = useState(100);

//   useEffect(() => {
//     setNum(200);
//     console.log("From Use Effect");
//   }, []);
//   console.log("num is ",num)
//   return (
//     <>
//       <h1>{num}</h1>
//       <button onClick={() => setNum((curr) => curr + 1)}>ADD</button>
//     </>
//   );
// }

// export default App;
