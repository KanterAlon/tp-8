import { createContext, useContext, useEffect, useState } from 'react'
import { useToast } from './ToastContext.jsx'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem('cartItems')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  const showToast = useToast()

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    } catch {
      // ignore write errors
    }
  }, [cartItems])

  const addToCart = producto => {
    setCartItems(prev => {
      const exist = prev.find(item => item.id === producto.id)
      if (exist) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...producto, quantity: 1 }]
    })
    showToast(`${producto.title} agregado al carrito`)
  }

  const removeFromCart = idProducto => {
    setCartItems(prev => prev.filter(item => item.id !== idProducto))
    showToast('Producto eliminado del carrito')
  }

  const increaseQuantity = idProducto => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === idProducto
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = idProducto => {
    setCartItems(prev => {
      const item = prev.find(p => p.id === idProducto)
      if (item.quantity === 1) {
        showToast('Producto eliminado del carrito')
        return prev.filter(p => p.id !== idProducto)
      }
      return prev.map(p =>
        p.id === idProducto ? { ...p, quantity: p.quantity - 1 } : p
      )
    })
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider')
  }
  return context
}
