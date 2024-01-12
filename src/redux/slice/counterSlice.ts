import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.count === 20) return;
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count === 0) return;
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
