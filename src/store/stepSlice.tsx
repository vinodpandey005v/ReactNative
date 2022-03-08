import {createSlice} from '@reduxjs/toolkit';

export const stepSlice = createSlice({
  name: 'step',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

export const {increment, reset} = stepSlice.actions;
export default stepSlice.reducer;