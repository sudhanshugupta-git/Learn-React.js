
// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import {todoReducer} from "./reducers/todoReducer";
import {notificationReducer} from './reducers/notificationReducer';
import {loggerMiddleware} from './middlewares/loggerMiddleware'
import { getDefaultNormalizer } from "@testing-library/react";

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

export const store = configureStore({
    reducer:{ 
        todoReducer,    // u can also provide as a key value pair
        noteReducer,
        notificationReducer
    },
    // redux toolkit has its own middleware. when we define a new then we are basicallty overridding the default one which'll give error in some cases like using using thunkapi etc which is dependant on default one. so, we need to import that middleware properties in our middleware to remove all those errors
    // middleware:[loggerMiddleware] // will give error when use thunkapi
    middleware: [...getDefaultMiddleware(), loggerMiddleware]
})

