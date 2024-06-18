import React from 'react'


//traditional method
// function User({props}){ 
//     return (
//         <>
//          <h1>{props.nameoftheperson}</h1>
//          <h1>{props.phonenumoftheperson}</h1>
//         </>
//     )
// }


// destructuring
function User({name,phone}) {
    return(
    <>
    <h1>{name}</h1>
    <h1>{phone}</h1>
    </>
  )
}

export default User