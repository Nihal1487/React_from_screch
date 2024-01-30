import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const favS = "netflix";

const Netflix = () => {
  if (favS === "netflix") {
    return (
      <Card
        key={Sdata[1].id}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
      />
    );
  } else {
    return (
      <Card
        key={Sdata[2].id}
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].link}
      />
    );
  }
};

export default Netflix;
