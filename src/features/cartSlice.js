import { createSlice } from "@reduxjs/toolkit";
import { setCart, getCart, cartClear } from "./Storage"
import { toast } from "react-toastify";


export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCart()
  },
  reducers: {
    addOrUpdateCart: (state, action) => {
      console.log('cartSilice',action.payload); 
      const item = action.payload;
      console.log('cart', JSON.parse(JSON.stringify(state.carts)));
      const isExist = state.carts.find(cart => cart.product === item.product);
      if (isExist) {
        state.carts = state.carts.map((cart) =>
          cart.product === isExist.product ? action.payload : cart
        );
        setCart(state.carts);
      } else {
        state.carts.push(action.payload);
        setCart(state.carts);
      }
      toast.success(`${item.name} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
    },

    removeCart: (state, action) => {
      const idToRemove = action.payload;
      console.log('Trying to remove item at index:', idToRemove);
      
      state.carts = state.carts.filter(cart => cart.product !== idToRemove)
      setCart(state.carts);
    },

    clearCartItem: (state, action) => {
      state.carts = [];
      cartClear();
    },
  }

});

export const { addOrUpdateCart, removeCart, clearCartItem } = cartSlice.actions;
export default cartSlice.reducer