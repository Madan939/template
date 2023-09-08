import { configureStore } from "@reduxjs/toolkit";
import { recordReducer } from "./recordSlice"; // Make sure the path is correct

const store = configureStore({
  reducer: {
    recordState: recordReducer,
   
  },
});

export default store;
