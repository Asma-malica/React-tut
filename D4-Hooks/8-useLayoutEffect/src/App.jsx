import React, { useEffect, useLayoutEffect, useState } from 'react'

function App() {
    const [count,setCount] = useState(0);
    
    useLayoutEffect(()=>{  //useLayoutEffect --> Runs before the browser updates the screen after render.
        // Executes synchronously before painting.Eg : in animation it'll be used 

    // useEffect(()=>{  // useEffect -> Runs after the render is committed to the screen.
    // Executes asynchronously after painting is complete.
        console.log("count",count);
    },[count]);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount((curr)=>curr+1)}>Add</button>
    </div>
  )
}

export default App