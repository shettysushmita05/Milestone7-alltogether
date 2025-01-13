import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import todoReducer from "./features/todoSlice";
import themeReducer from "./features/themeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
  },
});

export default store;
