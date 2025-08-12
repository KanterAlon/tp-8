import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import CartItemList from './CartItemList.jsx'
import './CartWidget.css'

function CartWidget() {
  const { cartItems, clearCart, getTotal } = useCart()
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
              <CartItemList />
              <p className="total">Total: {totalFormat}</p>
              <div className="cart-actions">
                <Link className="checkout-btn add-btn" to="/checkout" onClick={() => setOpen(false)}>
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
