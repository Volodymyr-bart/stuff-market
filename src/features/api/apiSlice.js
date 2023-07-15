import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";
// import axios from "axios";
// import { BASE_URL } from "../../utils/constants";

// const initialState = {
//   list: [],
//   filtered: [],
//   //   related: [],
//   isLoading: false,
// };

// export const getProducts = createAsyncThunk(
//   "products/getProducts",
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get(`${BASE_URL}/products`);
//       return res.data;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ id }) => `/products/${id}`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductQuery } = apiSlice;
