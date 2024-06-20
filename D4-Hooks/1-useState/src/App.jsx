import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(1);
  // whenever we are updating num value by means of setNum function the whole component gets re rendered (reloaded) 
  // thats why the value gets updated 
  
  const handle = () => { 
    // setNum(2);
    setNum((curr) =>{
        return curr+1;
    })
  };

  return (
    <>
      <h1>{num}</h1>
      <button onClick={handle}>ADD</button> 
    </>
  );
}

export default App;




// This function only prints in console it doesnt return the updated val to the eventlistener so in broser it doesnt get changed 
// so only usestate hook is used 
// function App() {
//   let x = 1 ;
//   const handle = () => { // event handling func when the add button is clicked it'll trigger this func
//       x++;
//       console.log("X is ",x);
//   }
//   return (
//     <>
//     <h1>{x}</h1>
//     <button onClick={handle}>ADD</button> 
//     {/* event listener */}
//     </>
//   )
// }


// export default App