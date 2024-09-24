// ---------------  Redux Toolkit ------------------

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: (state) => {
      state.counter++;
    },
    decreament: (state) => {
      state.counter--;
    },
    increaseDynamically: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;

export default store;
// ---------------   old redux   -----------------------

// import { createStore } from 'redux';

// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increament') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'decreament') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'increaseDynamically') {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
// const store = createStore(counterReducer);

// export default store;
