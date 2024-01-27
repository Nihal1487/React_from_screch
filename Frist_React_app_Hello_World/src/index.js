import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
// const name = "Nima"
const fname = "Nihal ";
const lname = "Chaudhary ";
const img = "https://picsum.photos/200/200";
const img2 = "https://picsum.photos/250/200";
const link = "https://www.youtube.com/";

const heading = {
  color: "aliceblue",
  textAlign: "center",
  margin: "50px",
  fontFamily: "Patrick Hand , cursive",
};
// only use expretionn dont use statement like if else
ReactDOM.render(
  <>
    <h1
      className="heading" //style={{color: "green", }}
      style={heading}
    >{`My name is ${fname} ${lname}`}</h1>
    <div className="img_div">
      <a href={link}>
        <img src={img} alt="RandomImages" />
      </a>
      <img src={img2} alt="RandomImages" />
    </div>
  </>,
  document.getElementById("root")
);
