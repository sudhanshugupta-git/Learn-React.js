import { useState } from "react";
import ChildComponent from "./ChildComponent";
import { colorContext } from "../context";

const ParentComponent = (props) => {
  const [color, setColor] = useState("#000000");
  console.log(colorContext)

  return (
    <>
      <h1>Pick a color</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
      {/*<ChildComponent color={color}/>*/}   {/*Instead directly providing props to component */}

      {/* Providing the context to the child component */}
      <colorContext.Provider value={{ color, setColor }}>
        <ChildComponent /> {/*Instead directly providing props to component */}
      </colorContext.Provider>
    </>
  );
};

export default ParentComponent;
