import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    sign: false,
    userinfo: {
      email: "",
      name: "user",
    },
  },
  reducers: {
    signIn(state, action) {
      (state.sign = true),
        (state.userinfo = {
          email: action.payload.email,
          name: action.payload.name,
        });
    },
    signOut(state) {
      (state.sign = false),
        (state.userinfo = {
          email: "",
          name: "user",
        });
    },
  },
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
