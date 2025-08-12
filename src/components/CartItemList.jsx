import { useCart } from '../context/CartContext.jsx'
import './CartWidget.css'

function CartItemList() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  return (
    <ul className="cart-list">
      {cartItems.map(item => (
        <li key={item.id}>
          <span className="item-title">{item.title}</span>
          <div className="qty-controls">
            <button className="qty-btn" onClick={() => decreaseQuantity(item.id)}>
              -
            </button>
            <span className="qty">{item.quantity}</span>
            <button className="qty-btn" onClick={() => increaseQuantity(item.id)}>
              +
            </button>
          </div>
          <span className="price">${item.price}</span>
          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
            ✕
          </button>
        </li>
      ))}
    </ul>
  )
}

export default CartItemList

