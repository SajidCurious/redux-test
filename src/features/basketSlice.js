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
  reducers: {},
});

export default basketSlice.reducer;
