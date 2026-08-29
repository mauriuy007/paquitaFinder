import { contact } from '../../data/contact.js'
import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <h2>¡Contactá a mi familia!</h2>
      <div className="contact-card">
        <p className="contact-label">📞 Teléfono</p>
        <p className="contact-value">{contact.phoneDisplay}</p>

        <p className="contact-label">📍 Dirección</p>
        <p className="contact-value">
          {contact.addressDisplay.split('\n').map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>

        <div className="contact-buttons">
          <a className="btn btn-call" href={contact.phoneHref}>
            📞 Llamar ahora
          </a>
          <a
            className="btn btn-map"
            href={contact.mapsHref}
            target="_blank"
            rel="noopener"
          >
            🗺️ Cómo llegar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
