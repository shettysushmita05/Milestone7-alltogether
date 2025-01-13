import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import todoReducer from "../features/todoSlice";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
  },
});

// Ensure you're using a named export, as "store".
