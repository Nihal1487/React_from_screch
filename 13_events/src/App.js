import React, { useState } from "react";

const App = () => {

  const purple = "#ffc0cb ";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("Click me")
  

  const BgChange = () => {
    let newbg = "#34495e"
    setBg(newbg)
    setName("ohh 💞")
  }

 const dbClick = () => {
  setName("WOW 👍")
  setBg(purple)
 }

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onMouseLeave={dbClick} onMouseEnter={BgChange}>{name}</button>
      </div>
    </>
  );
};

export default App;
