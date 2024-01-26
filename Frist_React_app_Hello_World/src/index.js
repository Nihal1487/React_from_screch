import React from "react";
import ReactDOM from "react-dom";

// const name = "Nima"
const fname = "Nihal ";
const lname = "Chaudhary ";
const img = "https://picsum.photos/200/200"
const img2 = "https://picsum.photos/250/200"
const link = "https://www.youtube.com/"
// only use expretionn dont use statement like if else
ReactDOM.render(
  <>
    <h1 contentEditable="true">{`My name is ${fname} ${lname}`}</h1>
    <h2>my lucky number is {1485 + 2}</h2>
    <a href={link}>
    <img src={img} alt="RandomImages" />
    </a>
    <img src={img2} alt="RandomImages" />
  </>,
  document.getElementById("root")
);
