import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";



export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },

  reducers: {
    display: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { display } = productSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getProduct = () => (dispatch) => {
  axios
    .get("http://localhost:3001/products")
    .then((item) => dispatch(display(item.data)));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProduct = (state) => state.products.products;

export default productSlice.reducer;
