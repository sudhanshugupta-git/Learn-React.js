import {createSlice } from "@reduxjs/toolkit";

// // in redux toolkit we can directly mutate the state(redux-toolkit takes care of everything like creating a copy etc.)
export const counterSlice = createSlice({
  name: "counter",
  initialState: {counter: 0},
  reducers:{
    increment(state,action){
      state.counter++; 
    },
    decrement(state,action){
      state.counter--;
    },
    addBy(state,action){
      state.counter += action.payload;
    }
  }
})

export const actions = counterSlice.actions;