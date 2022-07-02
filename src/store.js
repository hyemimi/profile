import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./my_reducer";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
