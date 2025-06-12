import { INCREMENT, DECREMENT, ADD_BY } from "../actions/actions";
const initialState = {
  counter:0
}
// reducer must be 1) synchrnous 2) should not mutate the original state
export const reducerFunc = (state=initialState, action)=>{

  if(action.type === INCREMENT){
    return {counter: state.counter +1};
  }

  else if(action.type === DECREMENT){
    return {counter: state.counter -1};
  }

  else if(action.type ===  ADD_BY){
    return {counter: state.counter +action.payload};
  }
  return state;

  // can use switch case as well
  // switch (action.type) { 
  //   case INCREMENT:
  //     return { counter: state.counter + 1 };
  //   case DECREMENT:
  //     return { counter: state.counter - 1 };
  //   case ADD_BY:
  //     return { counter: state.counter + action.payload };
  //   default:
  //     return state;
}
