import React, { useState } from 'react'

function Parentusinglocal() {
const[user,setUser] = useState('React');

  return (
    <>
    <h1>Parentusinglocal</h1>
    <Component1 user={user}/>
    </>
    
  )
}

export default Parentusinglocal

function Component1({user}){
  return(
    <>
    <h2>Component1</h2>
    <Component2 user={user}/>

    </>
  )
}

function Component2({user}){
  return(
    <>
    <h2>Component2</h2>
    <Component3 user={user}/>

    </>
  )
}

function Component3({user}){
  return(
    <>
    <h2>Component3</h2>
    <Component4 user={user}/>

    </>
  )
}

function Component4({user}){
  return(
    <>
    <h2>Component4</h2>
    <Component5 user={user}/>

    </>
  )
}

function Component5({user}){
  return(
    <>
    <h2>Component5</h2>
    <h1>{`user is ${user}`}</h1>
    </>
  )
}

//Prop drilling  --> this can be overcome by using use Context