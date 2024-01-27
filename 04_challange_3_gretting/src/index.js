import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"


let currDate = new Date()
currDate = currDate.getHours()

let greeting = ""

const css = {}

if (currDate >= 1 && currDate< 12) {
  greeting = "Good Mornimg"
  css.color = "green"
}
else if (currDate >= 12 && currDate < 16 ) {
  greeting = "Good Afternoon"
  css.color = "orange"
}
else if (currDate >= 16 && currDate < 20 ) {
  greeting = "Good Eveing"
  css.color = "red"
}
else {
  greeting = "Good Night"
}
ReactDOM.render(
  <>
 <div>
  <h1>Hello sir, <span style={css}>{greeting}</span></h1>
  </div>
  </>,document.getElementById('root'));
