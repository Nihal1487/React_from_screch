import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const FavS = "amazon";

const Amazonn = () => {
  if (FavS === "amazon") {
    return (
      <Card
        key={Sdata[2].id}
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].link}
      />
    );
  } else {
    return (
      <Card
        key={Sdata[0].id}
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}
      />
    );
  }
};

export default Amazonn;
