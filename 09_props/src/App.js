import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./App.css";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        List of My Fav Top 5 Nettflix series
      </h1>

      {Sdata.map((val) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </>
  );
}

export default App;
