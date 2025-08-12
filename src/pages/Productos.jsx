import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardProducto from '../components/CardProducto'

function Productos() {
  const { categoria } = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    if (categoria) {
      fetch(`https://dummyjson.com/products/category/${categoria}`)
        .then(res => res.json())
        .then(data => setProductos(data.products || []))
        .catch(() => setProductos([]))
    } else {
      fetch('https://dummyjson.com/products?limit=100')
        .then(res => res.json())
        .then(data => setProductos(data.products || []))
        .catch(() => setProductos([]))
    }
  }, [categoria])

  return (
    <section>
      <h1>{categoria ? `Productos - ${categoria}` : 'Todos los Productos'}</h1>
      <div className="grid">
        {productos.map(p => (
          <CardProducto key={p.id} producto={p} />
        ))}
      </div>
    </section>
  )
}

export default Productos
