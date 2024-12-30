import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  loading: false,
  error: null,
  currentEvent: null
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    fetchEventsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchEventsSuccess: (state, action) => {
      state.loading = false;
      state.events = action.payload;
    },
    fetchEventsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentEvent: (state, action) => {
      state.currentEvent = action.payload;
    }
  }
});

export const { 
  fetchEventsStart, 
  fetchEventsSuccess, 
  fetchEventsFailure,
  setCurrentEvent 
} = eventSlice.actions;

export default eventSlice.reducer;