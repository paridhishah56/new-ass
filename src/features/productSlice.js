import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API CALL
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://dummyjson.com/products"
    );
    return response.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default productSlice.reducer;