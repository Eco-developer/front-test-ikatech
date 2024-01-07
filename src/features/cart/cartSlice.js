import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.data.push(action.payload)
    },
  },
})

export const { setCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.data;
export const selectCartLength = (state) => state.cart.data.length;

export default cartSlice.reducer;