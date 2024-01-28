import { createSlice, configureStore } from "@reduxjs/toolkit";
import { storeData } from "../redux/data";

const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload.name);
      item.amount++;
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload.name);
      item.amount--;
    },
    removeItem: (state, { payload }) => {
      const updatedProducts = state.products.filter(
        (item) => item.name !== payload.name
      );

      return { ...state, products: updatedProducts };
    },
    updateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export const { increaseAmount, decreaseAmount, removeItem, updateTotal } =
  basketSlice.actions;

export default basketSlice.reducer;
