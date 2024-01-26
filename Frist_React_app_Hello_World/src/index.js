import React from "react";
import ReactDOM from "react-dom";

const name = "Nima"
// only use expretionn dont use statement like if else 
ReactDOM.render(
  <>
 <h1>
  My name is {name}
 </h1>
 <h2>my lucky number is {1485 + 2}</h2> 
  </>,
  document.getElementById("root")
);
