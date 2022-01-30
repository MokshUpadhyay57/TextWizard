import React from 'react';
import ReactDOM from 'react-dom';
import TextUtil from './components/TextUtil';
import Navbar from './components/Navbar';
import './css/index.css';



ReactDOM.render(
  <React.StrictMode>
    <Navbar title="TextUtils" />
    <TextUtil />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

