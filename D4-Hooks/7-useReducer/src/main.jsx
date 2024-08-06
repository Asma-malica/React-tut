import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import Reducers from './Reducers.jsx';  // Updated extension to .jsx
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Reducers />
  </React.StrictMode>
);
