import React, { useState, useCallback, Component } from 'react';
import List from './List';

// PROBLEM 
// Whenever the state variable gets changed the whole Component gets re rendered
// get items func gets re created as in the previous hook 
// the same as previous hook useMemo 
// if we click one func the whole func gets re rendered 
// which can be overcomed by useMemo also 
// but it return the value 
// useCallback func returns the function 

const App = () => {
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);
 
    // use callback 
    const getItems = useCallback(() => {
        return [num + 1, num + 2, num + 3];
    }, [num]);



  // // here whenever we're calling getItems theme also get change which can be overcome by useMemo (it returns the value) also
  // // but useCallback(it returns the entire function) is preferred   
  // Normal calling 
  //   const getItems = () => {
  //     return [num + 1, num + 2, num + 3];
  // };


    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    };

    return (
        <div style={theme}>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    );
}

export default App;
