// importing the useContext hooks and color context
import { useContext } from "react";
import { colorContext } from "../context";

const GrandChildComponent = (props) => {

  // Consuming the context
  // const value = useContext(colorContext);  
  // console.log(value.color);  // u have to use value in this way bcoz u are passing the value in object form

  const {color} = useContext(colorContext) // or directly use in this way

  return (
    <>
    {/* <p style={{ color: props.color }}>Color code: {props.color}</p> */}

    {/* Method-1(preferred if using function component) */}
    {/* <p style={{ color: value.color }}>Color code: {value.color}</p> */}
    <p style={{ color: color }}>Color code: {color}</p>

    {/* method-2(doesn't require to import useContext)  */}
    {/* you need the arrow function to correctly access and use the context value provided by colorContext.Consumer. */}
    {/* <colorContext.Consumer>
      {(color)=>( <p style={{ color: color }}>Color code: {color}</p> )}
    </colorContext.Consumer> */}
    </>
)
};

export default GrandChildComponent;
