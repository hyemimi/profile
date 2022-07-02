import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { name: "", age: 0, height: 0, favorites: "" },
  },
  reducers: {
    create: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { create } = userSlice.actions;
