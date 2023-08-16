import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  details: {},
  isLoading: false,
  error: {},
};

export const getFilmDetails = createAsyncThunk(
  "filmDetails/getFilmDetails",
  async (filmId) => {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`,
      {
        headers: {
          "X-API-KEY": "b48364fd-0e9e-4820-a173-a93ae273f78b",
        },
      }
    );
    return response.data;
  }
);

const filmDetailsSlice = createSlice({
  name: "filmDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFilmDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilmDetails.fulfilled, (state, action) => {
      console.log("action: ", action);
      state.isLoading = false;
      state.details = action.payload;
    });
    builder.addCase(getFilmDetails.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default filmDetailsSlice.reducer;
