// Action constants.
export const INCREMENT = "INCREMENT_COUNTER";
export const DECREMENT = "DECREMENT_COUNTER";
export const ADD_BY = "ADD_BY_COUNTER";

// Action Creators
export const incrementCounter = () => ({ type: INCREMENT });
export const decrementCounter = () => ({ type: DECREMENT });
export const addByCounter = (num) => ({ type: ADD_BY, payload: num });
