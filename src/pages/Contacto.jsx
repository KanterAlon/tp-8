import { useState } from 'react'
import './Contacto.css'

function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('Gracias por contactarnos!')
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <section className="contact-page">
      <h1>Contacto</h1>
      <p>
        ¿Tenés alguna pregunta o comentario? Completá el formulario y nos
        pondremos en contacto a la brevedad.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Nombre
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mensaje
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contacto