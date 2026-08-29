import qrCode from '../../assets/qr-code.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <img className="footer-qr" src={qrCode} alt="Código QR del collar de Paquita" />
      <p className="footer-qr-label">El QR de su collar 🐾</p>
      <p>Hecho con 💕 para Paquita</p>
    </footer>
  )
}

export default Footer
