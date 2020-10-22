import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelID: (state, action) => {
      state.app += action.payload;
    },
  },
});

export const { setChannelID } = appSlice.actions;

export const selectChannelID = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
