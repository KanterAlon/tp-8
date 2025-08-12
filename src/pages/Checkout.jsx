import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useToast } from '../context/ToastContext.jsx'
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
          <ul className="checkout-list">
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.title} x {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <p className="checkout-total">Total: {totalFormat}</p>
          <button className="btn-checkout" onClick={handleFinish}>
            Finalizar compra
          </button>
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
