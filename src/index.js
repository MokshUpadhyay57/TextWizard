import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import './css/index.css';



ReactDOM.render(
  <React.StrictMode>
      <Navbar title="My Navbar" />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

