// Props 
import React, { useState } from 'react';
import Samp from './Samp';

const App = () => {
  const [count, setCount] = useState(11);

  const handle = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handle}>Click {count}</button>
      <Samp count={count} />
    </div>
  );
};

export default App;




//import React, { useState } from 'react'

// function  Counter()
// {
//   return <p>Hello This is ASMA here!!</p>;
// }
// function Cn()
// {
//   return (
//     <>
//     <h2>AREA OF INTEREST</h2>
//     <ol>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>REACT</li>
//     </ol>
//     </>
//   );
// }

// function App() {
//   const name = "JAHIR";
//   return (
//     <div>
//       <h1>ASMA {name} </h1>
//       {1000 * 3}
//       <Counter></Counter>
//       <Cn></Cn>
//     </div>
//   );
// }

// export default App