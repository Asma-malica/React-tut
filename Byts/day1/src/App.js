
//import React, { useState } from 'react'

function  Counter()
{
  return <p>Hello This is ASMA here!!</p>;
}
function Cn()
{
  return (
    <>
    <h2>AREA OF INTEREST</h2>
    <ol>
      <li>HTML</li>
      <li>CSS</li>
      <li>REACT</li>
    </ol>
    </>
  );
}

function App() {
  const name = "JAHIR";
  return (
    <div>
      <h1>ASMA {name} </h1>
      {1000 * 3}
      <Counter></Counter>
      <Cn></Cn>
    </div>
  );
}

export default App