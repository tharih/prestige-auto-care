import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartReducer";
import userSlice from "./reducers/userReducer";
import quoteSlice from "./reducers/quoteReducer";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    users: userSlice,
    quote: quoteSlice,
    // comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
