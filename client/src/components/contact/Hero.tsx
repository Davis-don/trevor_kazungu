import './hero.css'
import germanTutorImg from '../../assets/images/IMG_0197.jpg'

function Hero() {
  return (
    <div className="overall-contact-hero-container">
      {/* Background Image */}
      <div className="contact-hero-background">
        <img src={germanTutorImg} alt="Trevor Dunah - Contact" />
        <div className="contact-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="contact-hero-content">
        <div className="contact-hero-text-wrapper">
          <span className="contact-hero-label">Contact</span>
          <h1 className="contact-hero-title">Get In Touch</h1>
          <div className="contact-hero-divider"></div>
          <p className="contact-hero-description">
            Have questions or want to work together? <br />
            I'd love to hear from you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero