import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './operations';
import { selectNameFilter } from '../filters/selectors';
import { selectCampers } from './selectors';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const camperSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)

      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        const {
          thumb,
          original,
          reviewer_name,
          reviewer_rating,
          comment,
          ...camperDetails
        } = action.payload;

        state.camper = camperDetails;

        state.gallery = [
          { type: 'thumb', url: thumb },
          { type: 'original', url: original },
        ];

        state.reviews = [
          {
            reviewerName: reviewer_name,
            reviewerRating: reviewer_rating,
            comment: comment,
          },
        ];
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});
export const campersReducer = camperSlice.reducer;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectNameFilter],
  (campers, filter) => {
    return campers.filter(
      item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.includes(filter)
    );
  }
);
