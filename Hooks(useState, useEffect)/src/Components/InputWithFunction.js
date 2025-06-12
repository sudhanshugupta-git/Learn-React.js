import { useState, useEffect } from "react";

export default function Input() {
  const [name, setName] = useState("Harry");
  const [lastName, setLastname] = useState("Potter");

  const [isIntervalRunning, setIsIntervalRunning] = useState(true);

  // useEffect acts as both componentDidMount and componentDidUpdate if we don't pass dependency array
  // if we pass an empty dependency array it'll act as componentDidMount
  // if we pass any condition in the dependency array the component will only update based on that condition
  useEffect(() => {
    document.title = name + " " + lastName;
  }, [name, lastName]);

  // now these two useEffects are doing completely different works hence proved hooks seperate concern
  // useEffect(()=>{
  //     let timer = setInterval(()=>{
  //         console.log("Window-Width: ", window.innerWidth);
  //     },2000)

  //     return clearInterval(timer); // clearInterval function is called immediately after setting the interval, so the interval is never actually running.
  // })

  // useEffect to log window width every 2 seconds
//   useEffect(() => {
//     let timer = setInterval(() => {
//       console.log("Window-Width: ", window.innerWidth);
//     }, 2000);

//     // Cleanup function to clear the interval
//     return () => clearInterval(timer);
//   }, []);

  // useEffect to log window width every 2 seconds
  useEffect(() => {
    if (isIntervalRunning) {
      const timer = setInterval(() => {
        console.log("Window-Width: ", window.innerWidth);
      }, 2000);

      // Cleanup function to clear the interval
      return () => clearInterval(timer);
    }
  }, [isIntervalRunning]);
  
  const toggleInterval = () => {
    setIsIntervalRunning((prevState) => !prevState);
  };

  return (
    <>
      <div className="section">
        <Row label="Name">
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row label="Last Name">
          <input
            className="input"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Row>
      </div>

      <h2>Hello, {name + " " + lastName}</h2>

      <button onClick={toggleInterval}>
        {isIntervalRunning ? "Stop Interval" : "Start Interval"}
      </button>
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
