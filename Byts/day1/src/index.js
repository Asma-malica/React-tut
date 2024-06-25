import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Samp from './Samp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* // <React.StrictMode> */}
    <App />
    {/* <Samp value={1} min = {1} max = {10} />  */}
    {/* props  */}
  {/* // </React.StrictMode> */} 
  {/* because of this only it prints two times  */}
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
