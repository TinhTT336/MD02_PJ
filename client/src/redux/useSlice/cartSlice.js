import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarts = createAsyncThunk("getCarts", async () => {
  const response = await axios.get(" http://localhost:3000/carts");
  console.log(response.data);
  return response.data;
});

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    data: [],
    mess: "no mess",
    isLoadingGet: false,
    isLoadingChange: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarts.pending, (state) => {
        return {
          ...state,
          mess: "pending",
          isLoadingGet: true,
        };
      })
      .addCase(getCarts.fulfilled, (state, action) => {
        return {
          ...state,
          data: action.payload,
          mess: "successful",
          isLoadingGet: false,
        };
      })
      .addCase(getCarts.rejected, (state) => {
        return {
          ...state,
          mess: "rejected",
          isLoadingGet: true,
        };
      });
  },
});

export default cartSlice.reducer;
