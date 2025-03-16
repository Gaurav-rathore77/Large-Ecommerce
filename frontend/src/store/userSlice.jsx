import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Initial user state
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Updating user data
    },
  },
});

// Exporting action creator
export const { setUser } = userSlice.actions;

// Exporting reducer
export default userSlice.reducer;
