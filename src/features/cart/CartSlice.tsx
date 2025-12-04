import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
export interface AddToCartPayload {
  id: number | string;
  title?: string;
  price: number;
  image: string
}

export interface CartItem {
  id: number | string;
  title?: string;
  price: number;
  cartQuantity: number;
  image: string // optional untuk property tambahan
}

interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState  = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
      }
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      )
      state.cartItems = nextCartItems;
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex((cart) => cart.id === action.payload.id)
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
        state.cartItems = nextCartItems;
      }
    },
    clearCart(state) {
      state.cartItems = []
    },
    getTotals(state) {
        const { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem
        const itemTotal = price * cartQuantity

        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity

        return cartTotal;
      }, {
        total: 0,
        quantity: 0
      })

      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    }
  }

})

export const selectAllItems = (state: RootState) => state.persistedReducer.cart.cartItems;
export const selectTotalAmount = (state: RootState) => state.persistedReducer.cart.cartTotalAmount;

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;