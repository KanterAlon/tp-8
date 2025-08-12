import { Link } from 'react-router-dom'

function CardCategoria({ categoria }) {
  const imgUrl = `https://source.unsplash.com/featured/300x200?${categoria.slug}`

  return (
    <div className="card-producto">
      <img src={imgUrl} alt={categoria.name} loading="lazy" />
      <div className="card-content">
        <h3>{categoria.name}</h3>
      </div>
      <Link className="btn-card" to={`/productos/${categoria.slug}`}>
        Ver productos
      </Link>
    </div>
  )
}

export default CardCategoria