import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import {Context} from "./context";

ReactDom.render(
  <Context>
    <App /> 
  </Context>,
  document.getElementById('root')
)
