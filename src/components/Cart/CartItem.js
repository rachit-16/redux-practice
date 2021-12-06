import { useDispatch } from 'react-redux'
import cartActions from '../../store/cart-actions'
import classes from './CartItem.module.css'

const CartItem = (props) => {
  const dispatchFn = useDispatch()

  const { id, title, quantity, totalPrice, price } = props.item

  const decreaseQtyHandler = () => {
    dispatchFn(cartActions.removeItem(id))
  }

  const increaseQtyHandler = () => {
    dispatchFn(cartActions.addItem({ id, title, price }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQtyHandler}>-</button>
          <button onClick={increaseQtyHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
