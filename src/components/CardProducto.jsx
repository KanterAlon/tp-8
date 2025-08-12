import { Link } from 'react-router-dom'

function CardProducto({ producto }) {
  return (
    <div className="card-producto">
      <img src={producto.thumbnail} alt={producto.title} loading="lazy" />
      <div className="card-content">
        <h3>{producto.title}</h3>
        <p className="price">${producto.price}</p>
      </div>
      <Link className="btn-card" to={`/producto/${producto.id}`}>Ver detalle</Link>
    </div>
  )
}

export default CardProducto