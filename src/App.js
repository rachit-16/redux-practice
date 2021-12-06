import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCartData, sendCartData } from './store/cart-actions'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'

let isInitial = true

function App() {
  const showCart = useSelector((state) => state.ui.showCart)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification) //success, title, message
  const dispatchFn = useDispatch()

  useEffect(() => {
    dispatchFn(fetchCartData())
  }, [dispatchFn])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    if (cart.changed) {
      dispatchFn(sendCartData(cart))
    }
  }, [cart, dispatchFn])

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
