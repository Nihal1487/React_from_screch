import React from 'react'
import './index.css';
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
  css.color = "black"
}

export default function Heading() {
  return (
    <>
    <h1>Hello sir, <span style={css}>{greeting}</span></h1>
    </>
  )
}
