import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import reducer, not the whole slice

export const store = configureStore({
  reducer: {
    user: userReducer, // Correct way to register reducer
  },
});
