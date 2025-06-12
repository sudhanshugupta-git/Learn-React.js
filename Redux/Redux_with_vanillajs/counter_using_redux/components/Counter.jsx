import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter, addByCounter } from "../redux/actions/actions";

function Counter() {
  const counter = useSelector((state)=> state.counter); // use to fetch the data from the store
  const dispatch = useDispatch();   // use to send the data and action to the reducer
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(incrementCounter())}>Increase</button>
      <button onClick={()=>dispatch(decrementCounter())}>Decrease</button>
      <button onClick={()=>dispatch(addByCounter(10))}>Add By</button>
    </div>
  );
}

export default Counter;
