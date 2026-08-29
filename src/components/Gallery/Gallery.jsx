import { useEffect, useRef, useState } from 'react'
import { photos } from '../../data/photos.js'
import './Gallery.css'

function Gallery() {
  const trackRef = useRef(null)
  const slideRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = slideRefs.current.indexOf(entry.target)
            if (idx !== -1) setActiveIndex(idx)
          }
        })
      },
      { root: track, threshold: 0.6 },
    )

    slideRefs.current.forEach((slide) => slide && observer.observe(slide))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="gallery">
      <h2>Así soy yo</h2>
      <div className="gallery-wrap">
        <div className="gallery-track" ref={trackRef}>
          {photos.map((src, i) => (
            <div
              className="gallery-slide"
              key={src}
              ref={(el) => (slideRefs.current[i] = el)}
            >
              <img src={src} alt={`Foto de Paquita ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-dots">
        {photos.map((src, i) => (
          <span key={src} className={`dot${i === activeIndex ? ' active' : ''}`} />
        ))}
      </div>
    </section>
  )
}

export default Gallery
