import { uiActions } from './ui'
import cartSlice from './cart-slice'

const cartActions = cartSlice.actions
const url = 'https://async-redux-971e2-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'

export default cartActions

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'Pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    )

    const sendRequest = async () => {
      const res = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      })

      if (!res.ok) {
        throw new Error('Sending cart data failed!')
      }
    }

    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      )
    }
  }
}

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(url)

      if (!res.ok) {
        throw new Error('Could not fetch cart data!')
      }

      const data = await res.json()

      return data
    }

    try {
      const cartData = await fetchData() // correctly formatted, as it was send as it is
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      )
    }
  }
}
