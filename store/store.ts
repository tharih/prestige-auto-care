import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartReducer";
import userSlice from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    users: userSlice,
    // comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
