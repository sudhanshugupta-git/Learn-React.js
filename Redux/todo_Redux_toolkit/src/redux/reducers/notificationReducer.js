import { actions as todoActions } from "./todoReducer";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset:(state,action)=>{
        state.message= ""
    }
  },
  // extraReducers let to access the completion status of another reducers. It takes action name followed by name of the reducer.
//   extraReducers: {
//     "todo/add": (state, action) => {
//       state.message = "Todo is added.";
//     }
//   },
// method:2 to define extraReducers. here we are not hardcoding the reducer name
//   extraReducers: (builder)=>{
//         builder.addCase(todoActions.add, (state, action) => {
//             state.message = "Todo is added.";
//         })
//     }
// method:3 to define extraReducers. using map objects
  extraReducers: {
        // map objects: [key]:value
        [todoActions.add]: (state, actions)=>{
            state.message= "Todo is added."
        }
    }
    
});

export const notificationReducer = notificationSlice.reducer;
export const notificationSelector = (state) => state.notificationReducer.message;
export const actions = notificationSlice.actions;
