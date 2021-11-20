import React from "react";
import ReactDOM from "react-dom";
import dogImage from "./images/dog.jpg";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <img src={dogImage} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
