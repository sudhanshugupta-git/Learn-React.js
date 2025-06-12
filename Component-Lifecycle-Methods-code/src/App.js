import React from "react";
import TimerOne from "./Components/Timer/TimerOne.js";
import ErrorBoundary from "./ErrorBoundary.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      timerOn: false
    }
  }

  handleTimerOn = () => {
    this.setState((prevState) => {
      return {
        timerOn: !prevState.timerOn
      }
    })
  };

  render() {
    return (
      <>
        <button onClick ={this.handleTimerOn}>{this.state.timerOn ? "Stop": "Start"}</button>
        {/* {this.state.timerOn? <TimerOne />: null} */}

        {/* passing in this way to make use of componentDidUpdate */}
        <TimerOne timerOn={this.state.timerOn}/>

        <ErrorBoundary>
          <ComponentA/>
          {/* <ComponentB/> */} {/*if there is an error inside componentA then this'll not render componentB as well. Hence enclose in seperate tag*/}
        </ErrorBoundary>

        <ErrorBoundary>
          <ComponentB/>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
