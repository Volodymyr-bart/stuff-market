import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const initialState = {
  currentUser: null,
  cart: [],
  isLoading: false,
  //
  formType: "signup",
  showForm: false,
};

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios.get(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      });

      return login.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
//   try {
//     const res = await axios.get("/api/user");
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     return thunkAPI.rejectWithValue(error);
//   }
// });

const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
};

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
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
    updateUser: (state, { payload }) => {
      // state.formType = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, addCurrentUser)
      .addCase(loginUser.fulfilled, addCurrentUser);
  },
});

export const { addItemToCart, toggleForm, toggleFormType, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
