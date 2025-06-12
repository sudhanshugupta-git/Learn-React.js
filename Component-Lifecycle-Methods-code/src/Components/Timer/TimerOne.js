import React from "react";

export default class TimerOne extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0
    };

    this.timer = null;
  }


  componentDidMount() {
    console.log("Timer ComponentDidMount");
    console.log("_________________________________");
    
    // this.timer = setInterval(() => {
    //   this.setState((prevState) => ({ time: prevState.time + 1 }));
    // }, 1000);
  }

  // we can avoid redering of the page if it returns false
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Timer shouldComponentUpdate");
    console.log("_________________________________");
    // console.log("inside shouldComponentUpdate",nextProps)
    // console.log("inside shouldComponentUpdate",nextState)

    // return true;

    console.log(this.state.time)
    // only allow re-rendering when time is multiple of 5
    return nextState.time % 5 === 0; 
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Timer getSnapshotBeforeUpdate");
    console.log("_________________________________");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Timer componentDidUpdate");
    console.log("_________________________________");
    console.log("Previous Props: ", prevProps)
    console.log("Previous state: ", prevState)
    console.log("getSnapshotBeforeUpdate: ", snapshot)

    if(prevProps.timerOn !== this.props.timerOn ){
      if(this.props.timerOn){

        this.timer = setInterval(() => {
            this.setState((prevState) => ({ time: prevState.time + 1 }));
          }, 1000);
      }else{
        clearInterval(this.timer)
      }
    }
  }

  componentWillUnmount() {
    console.log("Timer componentWillUnmount");
    if (this.state.time === 10) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <h2>Time Spent: {this.state.time}</h2>
        {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
      </div>
    );
  }
}