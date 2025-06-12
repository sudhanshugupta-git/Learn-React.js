import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/reducers/reducer";

function Counter() {
  const counter = useSelector((state)=> state.counter); // use to fetch the data from the store
  const dispatch = useDispatch();   // use to send the data and action to the reducer

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(actions.increment())}>Increase</button>
      <button onClick={()=>dispatch(actions.decrement())}>Decrease</button>
      <button onClick={()=>dispatch(actions.addBy(10))}>Add By</button>
    </div>
  );
}

export default Counter;
