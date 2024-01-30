import React from "react";
import "./App.css";
import SlotM from "./SlotM";


const App = () => {
  return (
    <>
      <h1 className="head">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bolder", color: "blue" }}>Slot Machine game 🎰</span>
      </h1>

      <SlotM x="😄" y="😄" z="😄" />
      <SlotM x="⚛️" y="👍" z="🍎" />
      <SlotM x="🤡" y="💯" z="💌" />
      <SlotM x="❤️" y="❤️" z="❤️" />
    </>
  );
};
export default App;
