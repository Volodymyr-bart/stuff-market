import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: [],
  cart: [],
  isLoading: false,
};

// export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
//   try {
//     const res = await axios.get("/api/user");
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     return thunkAPI.rejectWithValue(error);
//   }
// });

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];

      let found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else {
        newCart.push({ ...payload, quantity: 1 });
      }

      state.cart = newCart;
    },
  },

  extraReducers: (builder) => {
    // builder.addCase();
    // .addCase(getUser.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getUser.fulfilled, (state, { payload }) => {
    //   state.currentUser = payload;
    //   state.isLoading = false;
    // })
    // .addCase(getUser.rejected, (state) => {
    //   state.isLoading = false;
    // });
  },
});

export const { addItemToCart } = userSlice.actions;

export default userSlice.reducer;
