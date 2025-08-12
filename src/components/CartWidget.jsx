import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import './CartWidget.css'

function CartWidget() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    getTotal,
    increaseQuantity,
    decreaseQuantity
  } = useCart()
  const [open, setOpen] = useState(false)

  const totalFormat = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  }).format(getTotal())

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="cart-widget">
      <button className="cart-button" onClick={() => setOpen(o => !o)}>
        🛒 {itemCount}
      </button>
      {open && (
        <div className="cart-dropdown">
          {cartItems.length === 0 ? (
            <p className="empty">Carrito vacío</p>
          ) : (
            <>
              <ul>
                {cartItems.map(item => (
                  <li key={item.id}>
                    <span className="item-title">{item.title}</span>
                    <div className="qty-controls">
                      <button
                        className="qty-btn"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="qty">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <span className="price">${item.price}</span>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
              <p className="total">Total: {totalFormat}</p>
              <div className="cart-actions">
                <Link className="checkout-btn" to="/checkout" onClick={() => setOpen(false)}>
                  Ir al checkout
                </Link>
                <button className="clear" onClick={clearCart}>
                  Vaciar carrito
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default CartWidget
