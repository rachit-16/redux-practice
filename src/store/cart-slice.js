import { createSlice } from '@reduxjs/toolkit'

const cartInitialState = { items: [], totalQuantity: 0, changed: false }
// item -> {id, title, price, quantity, totalPrice}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items
      state.totalQuantity = action.payload.totalQuantity
    },

    addItem(state, action) {
      const newItem = action.payload // newItem -> {id, title, price}
      const existingItem = state.items.find((item) => item.id === newItem.id)

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price })
      } else {
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
      }

      state.totalQuantity++
      state.changed = true
    },

    removeItem(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }

      state.totalQuantity--
      state.changed = true
    },
  },
})

// export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
export default cartSlice
