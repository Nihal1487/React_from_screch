import React from "react";
import "./App.css";
import Netflix from "./Netflix";
import Amazonn from "./Amazonn";

const favS = "netflix";

// const FavSeris = () => {
//   if (favS === "netflix") {
//     return <Netflix />
//   }else{
//    return  <Amazonn />
//   }
// }

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        List of My Fav Top 5 Nettflix series
      </h1>
      {/* <FavSeris /> */}
      
      {favS === "netflix" ? <Netflix /> : <Amazonn />}
    </>
  );
};

export default App;
