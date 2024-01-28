import React from "react";
import ReactDOM from "react-dom";
import App, {favLang, myNickname} from "./App"
// import * as bio from "./App"

ReactDOM.render(
  <>
    <ol>
      <li>Nima</li>
      <li>{App}</li>
      <li>{favLang}</li>
      <li>{myNickname()}</li>
    </ol>
  </>,
  document.getElementById("root")
);
