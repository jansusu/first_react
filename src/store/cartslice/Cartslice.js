import { createSlice } from "@reduxjs/toolkit";

const storedItems = localStorage.getItem("cartItems");
const initialState = {
  cartItems: storedItems ? JSON.parse(storedItems) : [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (items) => items.id == newItem.id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push({
          id: newItem.id,
          image: newItem.image,
          title: newItem.title,
          ds: newItem.ds,
          price: newItem.price,
          quantity: newItem.quantity,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (items) => items.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, deleteFromCart } = cartSlice.actions;
