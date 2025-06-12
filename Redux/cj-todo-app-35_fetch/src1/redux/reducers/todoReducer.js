import axios from "axios";
const { createSlice, createAsyncThunk, original } = require("@reduxjs/toolkit");

const initialState = {
  todos: [
    { text: "Go to Gym at 6", completed: false },
    { text: "Study at 8", completed: true },
  ],
};

// this is not a pure function
// original api: http://localhost:4100/api/todos
export const getInitialStateAsync = createAsyncThunk(
  "todo/getInitialState",
  async (arg, thunkAPI) => {
    // async calls.
    try {
      const res = await axios.get("/api/todos");
      // dispatch(actions.setInitialState(res.data)) // it is not allowed to call another action inside an action
      thunkAPI.dispatch(actions.setInitialState(res.data)); // but using the property of createAsyncThunk that is thunkAPI, we can do it.
    } catch (err) {
      console.log(err);
    }
  }
);

export const addTodoAsync = createAsyncThunk("todo/addTodo",async (payload)=>{
    const response = await fetch("/api/todos",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            text: payload,
            completed: false
        })
    })
    return response.json();
})

// Creating Reducer using Redux Toolkit
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // setInitialState: (state, action) => {
    //   state.todos = [...action.payload];
    // },
    // this is add action
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(getInitialStateAsync.fulfilled, (state, action)=>{
        console.log("inside getInitialState extraReducer: ", action.payload)
        state.todos = [...action.payload.data]
    })
    .addCase(addTodoAsync.fulfilled, (state, action)=>{
        console.log(action.payload);
        state.todos.push(action.payload);
    })
}
});

export const todoReducer = todoSlice.reducer; // this'll be used in store

export const actions = todoSlice.actions;   // this'll be used in components

// selector
export const todoSelector = (state) => state.todoReducer.todos; // u need to specify the reducer for which the state u are accesing for

// Reducer using redux

// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }
