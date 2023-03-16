"use client";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// Define a type for the slice state
interface cartState {
  [x: string]: any;
  cartItems: any[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  cartTotalDiscount: number;
  grandTotalDiscount: number;
  cashGiven: number;
  balance: number;
  customerDetails: {} | null;
  paymentType: string | null;
}

type ReducerProps = {};

const initialState: cartState = {
  cartItems:
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? // @ts-ignore
        JSON.parse(localStorage.getItem("cart"))
      : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartTotalDiscount: 0,
  grandTotalDiscount: 0,
  cashGiven: 0,
  balance: 0,
  customerDetails: null,
  paymentType: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // find product by id
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        // const tempProducts: any[] = {
        //   ...action.payload,
        //   cartQuantity: 1,
        // };
        state.cartItems.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decreaseQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      typeof window !== "undefined"
        ? localStorage.setItem("cart", JSON.stringify(state.cartItems))
        : false;
    },
    getCartTotal: (state) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, decreaseQty, removeItem, getCartTotal } =
  cartSlice.actions;

export const selectCartItems = (state: cartState) => state.cart.cartItems;
export const selectCarTotal = (state: cartState) => state.cart.cartTotalAmount;
export const selectCarTotalQuantity = (state: cartState) =>
  state.cart.cartTotalQuantity;
export const selectCartAll = (state: cartState) => state.cart;

export default cartSlice.reducer;
