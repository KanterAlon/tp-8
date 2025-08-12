import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useToast } from '../context/ToastContext.jsx'
import CartItemList from '../components/CartItemList.jsx'
import './Checkout.css'

function Checkout() {
  const { cartItems, getTotal, clearCart } = useCart()
  const showToast = useToast()
  const navigate = useNavigate()
  const [completed, setCompleted] = useState(false)

  const totalFormat = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  }).format(getTotal())

  const handleFinish = () => {
    setCompleted(true)
    showToast('¡Compra finalizada!')
    setTimeout(() => {
      clearCart()
      navigate('/')
    }, 2000)
  }

  return (
    <section className="checkout container">
      <h1>Resumen de compra</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <CartItemList />
          <p className="checkout-total">Total: {totalFormat}</p>
          <div className="cart-actions">
            <button className="add-btn" onClick={handleFinish}>
              Finalizar compra
            </button>
            <button className="clear" onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
      {completed && (
        <div className="checkout-overlay">
          <div className="checkmark">✓</div>
        </div>
      )}
    </section>
  )
}

export default Checkout
