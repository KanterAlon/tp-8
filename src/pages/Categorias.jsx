import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../utils/api'

function Categorias() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetchCategories()
      .then(setCategorias)
      .catch(() => setCategorias([]))
  }, [])

  return (
    <section>
      <h1>Categorías</h1>
      <ul>
        {categorias.map(cat => (
          <li key={cat.slug}>
            <Link to={`/productos/${cat.slug}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Categorias