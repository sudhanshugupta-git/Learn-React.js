
// import {ADD_NOTE, DELETE_NOTE} from "../actions/noteActions";    //not required when using redux-toolkit
const {createSlice} = require("@reduxjs/toolkit");

const initialState={
    notes:[{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'
    , createdOn: new Date().toDateString()},
    {text:'Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.'
    , createdOn: new Date().toDateString()}]
};

// reducer using redux
// export function noteReducer(state=initialState, action){
//     switch(action.type){
//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes:[
//                     ...state.notes,
//                     {
//                         text:action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }
//         case DELETE_NOTE:
//             state.notes.splice(action.index,1);
//             console.log(state.notes);
//             return{
//                 ...state,
//                 notes: [...state.notes]
//             }
//         default:
//             return state;
//     }
// }


// reducer using redux-toolkit
const noteSlice = createSlice({ // automatically generates action creators and action types that correspond to the reducers and state.
    name:"note",
    initialState: initialState,
    reducers:{
        // define actions here
        add:(state, action)=>{
            state.notes.push({
                text:action.payload,    // payload is a property in redux toolkit to access the data send by dispatchers
                createdOn:new Date().toDateString()   // important else it'll give non-serialization error
            })
        },
        delete:(state, action)=>{
            state.notes.splice(action.payload, 1);
        }
    }
})

export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;
//selectors
export const noteSelector = (state)=>state.noteReducer.notes;