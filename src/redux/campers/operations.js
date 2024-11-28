import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (filters = {}, thunkAPI) => {
    try {
      const response = await axios.get(`/campers`, { params: filters });
      return response.data.items;
    } catch (e) {
      console.error('Error in fetch campers:', e);
      return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
