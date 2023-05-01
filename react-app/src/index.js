import React from  'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
const element = <h1>Hello World</h1>;

console.log(element);
ReactDom.render(element, document.getElementById('root'));