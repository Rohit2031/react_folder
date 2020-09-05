import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Demo from './Demo';
import * as serviceWorker from './serviceWorker';
import Avatar from './Avatar';

// here we define multiple component name is avatar 
ReactDOM.render(
    <div>
    <Avatar id = "1" name = "Rohit Kumar" work ="Python Developer"/>
 
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
