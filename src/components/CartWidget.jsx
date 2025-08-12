import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import './CartWidget.css'

function CartWidget() {
  const { cartItems, removeFromCart, clearCart, getTotal } = useCart()
  const [open, setOpen] = useState(false)

  const totalFormat = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  }).format(getTotal())

  const itemCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  )

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
                    <span>
                      {item.title} x {item.quantity}
                    </span>
                    <span>${item.price}</span>
                    <button onClick={() => removeFromCart(item.id)}>✕</button>
                  </li>
                ))}
              </ul>
              <p className="total">Total: {totalFormat}</p>
              <button className="clear" onClick={clearCart}>
                Vaciar carrito
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default CartWidget
