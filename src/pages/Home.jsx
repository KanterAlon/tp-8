import React, { useEffect, useState } from 'react'
import './Home.css'

const slides = [
  {
    img:
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600',
    caption: 'Innovación sin límites'
  },
  {
    img:
      'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1600',
    caption: 'Diseño vanguardista'
  },
  {
    img:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600',
    caption: 'Rendimiento superior'
  }
]

const features = [
  {
    img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Calidad Superior',
    description: 'Materiales de excelencia para una experiencia única.'
  },
  {
    img: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Envíos Rápidos',
    description: 'Recibí tus productos en tiempo récord en todo el país.'
  },
  {
    img: 'https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Soporte 24/7',
    description: 'Nuestro equipo está listo para ayudarte cuando lo necesites.'
  }
]

const testimonials = [
  {
    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'Excelente calidad y atención, ¡recomendado!',
    name: 'Ana Gómez'
  },
  {
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?',
    quote: 'Los envíos llegaron a tiempo y en perfecto estado.',
    name: 'Luis Rodríguez'
  },
  {
    img: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'Gran variedad de productos y diseño innovador.',
    name: 'Franklin Klinton'
  }
]

const Home = () => {
  const [current, setCurrent] = useState(0)
  const [testIndex, setTestIndex] = useState(0)

  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length)
  const nextSlide = () => setCurrent((current + 1) % slides.length)
  const prevTest = () => setTestIndex((testIndex - 1 + testimonials.length) % testimonials.length)
  const nextTest = () => setTestIndex((testIndex + 1) % testimonials.length)

  useEffect(() => {
    const intervalSlides = setInterval(
      () => setCurrent(c => (c + 1) % slides.length),
      5000
    )
    const intervalTest = setInterval(
      () => setTestIndex(t => (t + 1) % testimonials.length),
      7000
    )
    return () => {
      clearInterval(intervalSlides)
      clearInterval(intervalTest)
    }
  }, [])

  return (
    <div className="layout">
      <section className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">Bienvenido a nuestra tienda de productos.</h1>
          <p className="hero-subtitle">Descubrí los mejores productos innovadores sin límites.</p>
          <a href="productos" className="btn btn-primary">Explorar Ahora</a>
        </div>
      </section>

      <section className="features container">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <img src={f.img} alt={f.title} loading="lazy" />
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </section>

      <section className="carousel container">
        <button className="arrow left" onClick={prevSlide}>&#10094;</button>
        <div className="slides">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
              <img src={slide.img} alt={slide.caption} loading="lazy" />
              <p className="caption">{slide.caption}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={nextSlide}>&#10095;</button>
      </section>

      <section className="testimonials container">
        <div className="testimonial-slide-wrapper">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-slide ${i === testIndex ? 'active' : ''}`}
            >
              <img src={t.img} alt={t.name} loading="lazy" />
              <p className="quote">{t.quote}</p>
              <p className="name">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="testimonial-controls">
          <button onClick={prevTest}>&#10094;</button>
          <button onClick={nextTest}>&#10095;</button>
        </div>
      </section>

      <footer className="footer container">
        <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;