import { photos } from '../../data/photos.js'
import './Hero.css'

function Hero() {
  const mainPhoto = photos[0]

  return (
    <header className="hero">
      <div className="hero-photo">
        {mainPhoto ? (
          <img src={mainPhoto} alt="Foto de Paquita" />
        ) : (
          <div className="photo-placeholder">
            <span className="paw">🐾</span>
            <p>
              Foto de Paquita
              <br />
              muy pronto
            </p>
          </div>
        )}
      </div>
      <h1 className="name">Paquita</h1>
      <p className="tagline">¡Me perdí! Ayudame a volver a casa 💕</p>
    </header>
  )
}

export default Hero
