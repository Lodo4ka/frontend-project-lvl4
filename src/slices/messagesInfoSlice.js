/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { setInitialState, removeChannel } from './channelsInfoSlice.js';

const messagesInfoSlice = createSlice({
  name: 'messagesInfo',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, { payload }) => {
      state.messages.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setInitialState, (state, action) => {
        state.messages = action.payload.messages;
      })
      .addCase(removeChannel, (state, action) => {
        state.messages = state.messages.filter((message) => message.channelId !== action.payload);
      });
  },
});

export const { addMessage } = messagesInfoSlice.actions;

export default messagesInfoSlice.reducer;
