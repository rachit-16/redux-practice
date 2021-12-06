import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui'
import classes from './CartButton.module.css'

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatchFn = useDispatch()

  const toggleCart = () => {
    dispatchFn(uiActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  )
}

export default CartButton
