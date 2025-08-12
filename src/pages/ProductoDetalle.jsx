import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductoDetalle.css'

function ProductoDetalle() {
  const { idProducto } = useParams()
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [image, setImage] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/${idProducto}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data)
        setImage(data.images?.[0] || data.thumbnail)
      })
      .catch(err => {
        console.error(err)
        setProducto(null)
      })
      .finally(() => setLoading(false))
  }, [idProducto])

  if (loading) return <p>Cargando...</p>
  if (!producto) return <p>No se encontró el producto.</p>

  const { title, description, price, rating, brand, images = [] } = producto

  const priceFormat = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  }).format(price)

  return (
    <section className="product-detail">
      <div className="product-gallery">
        <img className="main-img" src={image} alt={title} loading="lazy" />
        {images.length > 1 && (
          <div className="thumbnail-list">
            {images.map(img => (
              <button
                key={img}
                className={image === img ? 'active' : ''}
                onClick={() => setImage(img)}
              >
                <img src={img} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="product-info">
        <h1>{title}</h1>
        <p className="price">{priceFormat}</p>
        <p className="brand">{brand}</p>
        <p className="rating">⭐ {rating}</p>
        <p className="description">{description}</p>
        <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
      </div>
    </section>
  )
}

export default ProductoDetalle