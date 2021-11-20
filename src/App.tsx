import React from "react";
import ReactDOM from "react-dom";
import dogImage from "./images/dog.jpg";

const App = () => {
  return (
    <div>
      <h1>Hello React!</h1>

      <img src={dogImage} alt="dog" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
