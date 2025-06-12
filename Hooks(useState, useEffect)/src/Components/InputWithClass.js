import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Tony",
      lastName: "Stark",
    };
    this.timer = null;
  }
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleLastnameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  componentDidMount() {
    document.title = this.state.name + " " + this.state.lastName;

    // this is a completely different logic from the above one still written in the same function
    this.timer = setInterval(() => {
      console.log("Window-Width: ", window.innerWidth);
    }, 2000);
  }

  componentDidUpdate() {
    // document.title = this.state.name+" "+this.state.lastName;
    // Update document title only if name or lastName has changed
    if (
      prevState.name !== this.state.name ||
      prevState.lastName !== this.state.lastName
    ) {
      document.title = this.state.name + " " + this.state.lastName;
    }
  }

  // u can only invoke this function through its parent compoent only written below
  componentWillUnmount() {
    // it is related to above setInterval but written in different function which can sometime lead to bug
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <div className="section">
          <Row label="Name">
            <input
              className="input"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </Row>
          <Row label="Last Name">
            <input
              className="input"
              value={this.state.lastName}
              onChange={this.handleLastnameChange}
            />
          </Row>
        </div>

        <h2>Hello, {this.state.name + " " + this.state.lastName}</h2>
      </>
    );
  }
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


// parent component
// import React, { useState } from "react";
// import Input from "./Input"; // Adjust the import path as needed

// function App() {
//   const [showInput, setShowInput] = useState(true);

//   const toggleInput = () => {
//     setShowInput(!showInput);
//   };

//   return (
//     <div>
//       <button onClick={toggleInput}>
//         {showInput ? "Hide" : "Show"} Input Component
//       </button>
//       {showInput && <Input />}
//     </div>
//   );
// }

// export default App;

