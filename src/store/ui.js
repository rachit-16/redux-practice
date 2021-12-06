import { createSlice } from '@reduxjs/toolkit'

const uiInitialState = { showCart: false, notification: null }

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart
    },
    showNotification(state, action) {
      const { status, title, message } = action.payload
      state.notification = { status, title, message }
    },
  },
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer
