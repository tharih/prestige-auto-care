import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";
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
  cartItems: Cookies.get("cart")
    ? // @ts-ignore
      JSON.parse(Cookies.get("cart"))
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
        (item) => item._key === action.payload._key
      );

      if (
        itemIndex >= 0 &&
        state.cartItems[itemIndex].qty <=
          state.cartItems[itemIndex].cartQuantity
      ) {
      } else if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        // const tempProducts: any[] = {
        //   ...action.payload,
        //   cartQuantity: 1,
        // };
        state.cartItems.push(action.payload);
      }
      Cookies.set("cart", JSON.stringify(state.cartItems));
    },
    decreaseQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._key === action.payload._key
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem._key !== action.payload._key
      );

      state.cartItems = nextCartItems;
      Cookies.set("cart", JSON.stringify(state.cartItems));
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
    clearCart: (state) => {
      state.cartItems = [];
      Cookies.remove("cart");
    },
  },
});

export const { addToCart, decreaseQty, removeItem, getCartTotal, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state: cartState) => state.cart.cartItems;
export const selectCarTotal = (state: cartState) => state.cart.cartTotalAmount;
export const selectCarTotalQuantity = (state: cartState) =>
  state.cart.cartTotalQuantity;
export const selectCartAll = (state: cartState) => state.cart;

export default cartSlice.reducer;
