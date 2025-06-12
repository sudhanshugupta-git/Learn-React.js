// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions"; //not required when using redux-toolkit
const {createSlice} = require("@reduxjs/toolkit");

const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}


// reducer using redux
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

// reducer using redux-toolkit
const todoSlice = createSlice({ // automatically generates action creators and action types that correspond to the reducers and state.
    name:"todo",
    initialState: initialState,
    reducers:{
        // define actions here
        add:(state, action)=>{
            state.todos.push({
                text:action.payload,    // payload is a property in redux toolkit to access the data send by dispatchers
                completed:false
            })
        },
        toggle:(state, action)=>{
            state.todos.map((todo, i)=>{
                if(i === action.payload){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    }
})

//reducers
export const todoReducer = todoSlice.reducer; // reducer and reducers in todoSlice both are different
// actions
export const actions = todoSlice.actions;
//selectors
export const todoSelector = (state)=>state.todoReducer.todos;