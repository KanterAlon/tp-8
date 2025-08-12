  import './QuienesSomos.css'

  const equipo = [
    {
      img:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      nombre: 'Ana Gómez',
      rol: 'CEO'
    },
    {
      img:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      nombre: 'Luis Rodríguez',
      rol: 'CTO'
    },
    {
      img:
        'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
      nombre: 'María Pérez',
      rol: 'Marketing'
    }
  ]

  function QuienesSomos() {
    return (
      <section className="about-page">
        <h1>Quiénes Somos</h1>
        <p>
          En Mi Tienda nos apasiona acercar productos innovadores y de calidad a
          todos nuestros clientes.
        </p>
        <p>
          Desde 2020 trabajamos para brindar una experiencia de compra sencilla y
          segura, con envíos a todo el país.
        </p>
        <p>
          Nuestro objetivo es combinar tecnología y atención personalizada para
          que encuentres exactamente lo que buscás.
        </p>
        <div className="team-grid">
          {equipo.map((m, i) => (
            <div key={i} className="team-member">
              <img src={m.img} alt={m.nombre} loading="lazy" />
              <p className="name">{m.nombre}</p>
              <p className="role">{m.rol}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }

  export default QuienesSomos