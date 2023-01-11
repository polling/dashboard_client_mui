import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  user: null,
  userId: null,
  token: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.userId = action.payload.user._id;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.userId = null;
      state.token = null;
    },
  },
});

export const { setMode, setLogin, setLogout } = globalSlice.actions;

export default globalSlice.reducer;
