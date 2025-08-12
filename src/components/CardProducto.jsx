import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

function CardProducto({ producto }) {
  const { addToCart } = useCart()

  return (
    <div className="card-producto">
      <img src={producto.thumbnail} alt={producto.title} loading="lazy" />
      <div className="card-content">
        <h3>{producto.title}</h3>
        <p className="price">${producto.price}</p>
      </div>
      <div className="card-actions">
        <Link className="btn-card" to={`/producto/${producto.id}`}>
          Ver detalle
        </Link>
        <button className="btn-card" onClick={() => addToCart(producto)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default CardProducto