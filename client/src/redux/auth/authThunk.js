import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../services/auth.service";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await login(userData)
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  },
);
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await register(userData)
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  },
);
