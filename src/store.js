import { configureStore  } from "@reduxjs/toolkit";
import TodoReducer from './store/todo';
import UserReducer from "./store/user";
export default configureStore({
    reducer: {
        todo: TodoReducer,
        user: UserReducer,
    }
})