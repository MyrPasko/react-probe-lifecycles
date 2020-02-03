import React, { Component } from "react";
import "./styles.css";
import ShowContainer from "./ShowContainer";

class App extends Component {
  state = {
    obj: {
      age: 0
    }
  };

  setFiveHandler = () => {
    this.setState({ obj: { ...this.state.obj, age: 5 } });
  };

  setTenHandler = () => {
    this.setState({ obj: { ...this.state.obj, age: 10 } });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button className="Button" onClick={this.setFiveHandler}>
          Set 5
        </button>
        <button className="Button" onClick={this.setTenHandler}>
          Set 10
        </button>
        <ShowContainer count={this.state.obj} />
      </div>
    );
  }
}

export default App;
