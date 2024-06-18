import React from 'react'
import User from "./User"
function App() {
  let userData = {
    name : "Asma",phone : 6380119149,
  }

  return (
      
      <User
      // nameoftheperson = {userData.name}
      // phonenumoftheperson = {userData.phone}

      {...userData} // spread operator 
      />
  )
}

export default App