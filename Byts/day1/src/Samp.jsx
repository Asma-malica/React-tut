// Props 
// re render --> oru state value maaru rapo re render aagum 
// why in props curly braces --> destructuring 


// Even number or odd number 
// import React from 'react';
// const Samp = ({ count }) => {
//     if(count%2 == 0)
//     return (<p>This is even number</p>);
//     else
//     return (<p>This is odd number</p>);
    
//     // <div>
//     //   {count % 2 === 0 ? (<p>This is an even number</p>) : (<p>This is an odd number</p>)}
//     // </div>
// };
// export default Samp;

// class component 

import React from 'react';
const Samp = ({ count }) => {
    if(count%2 === 0)
    return (<p>This is even number</p>);
    else
    return (<p>This is odd number</p>);
    
    // <div>
    //   {count % 2 === 0 ? (<p>This is an even number</p>) : (<p>This is an odd number</p>)}
    // </div>
};
export default Samp;



// -----------------------------------------------------------------------------------
// counting using props 
// import { useState } from "react";
// export default function Samp({value,min,max}){
//     //let count=0;
//     const[count,setCount]=useState(value);
//     function HandleClick(){
//         //console.log("Btn is clicked",count);
//         //count=count+1;
//         if(count<max)
//             setCount(count+1);
        
//         //setCount(()=>{
//         //   return count+1});
//     }
//     function HandleClickdec(){
//         if(count>min)
//           setCount(count-1);
       
//     }
//     return(
//         <>
//           <h1>Hello! {count}</h1>
//           <button onClick={HandleClick}>incr</button>
//           <button onClick={HandleClickdec}>decr</button>
//         </>
//     );
// }




// ----------------------------------------------------------------------------
// Use State 
// // event handling  

// // epola state , props , effect maarutho apolaa component re render aagum 

// import React from 'react'
// import { useState } from 'react';
// // let count = 0 ;

// const Samp = () => {
//   const[count,setCount] = useState(0);

//   //limit 0 to 10

//   function handleIncr()
//   {
//     console.log("My button is clicked",count);
//     // count = count + 1 ; // normal variable vachuruntha re render aagathu

//     if(count >= 0 && count < 10)
//     // setCount(count+1) // useState 
//     setCount(()=>{return count+1});
//   }

//   function handleDecr()
//   {
//     console.log("My button is clicked",count);
//     if(count > 0)
//     setCount(()=>{return count-1});
//   }
// //   screen la irkura value update aagurathukku state ku porom 
//   return (
//     <div>
//         <h1>Button</h1>
//         <p>The value of count is {count}</p>
//         <button onClick={handleIncr}>Increment </button>
//         <button onClick={handleDecr}>Decrement </button>
//     </div>
//   )
// }

// export default Samp;