import React from "react";
import ReactDOM from "react-dom";

const date = new Date().toLocaleDateString()
const time = new Date().toLocaleTimeString()

ReactDOM.render(
  <>
    <h1>My Name Nihu</h1>

   <p> {`Today date is ${date}`}</p>
   <p>{`Currennt time is ${time}`} </p>
  </>,

  document.getElementById("root")
);
