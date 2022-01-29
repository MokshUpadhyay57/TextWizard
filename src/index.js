import React from 'react';
import ReactDOM from 'react-dom';
import TextUtils from './components/TextUtils';
import Navbar from './components/Navbar';
import './css/index.css';



ReactDOM.render(
  <React.StrictMode>
    <Navbar title="TextUtils" />
    <TextUtils />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

