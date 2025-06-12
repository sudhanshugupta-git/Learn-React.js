
// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import {todoReducer} from "./reducers/todoReducer";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleWare } from "./middlewares/loggerMiddleware";

// const result = combineReducers({
//     todoReducer: todoReducer,
//     noteReducer: noteReducer
// })

// export const store = redux.createStore(result);
//using redux-tookit
export const store = configureStore({
    reducer:{
        todoReducer: todoReducer,
        noteReducer: noteReducer,
        notificationReducer
    },
    middleware:[loggerMiddleWare] // optional
});

