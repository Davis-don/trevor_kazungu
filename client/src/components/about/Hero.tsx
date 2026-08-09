import './hero.css'
import germantutor from '../../assets/images/IMG_0197.jpg'

function Hero() {
  return (
    <div className="overall-hero-container">
      {/* Background Image */}
      <div className="hero-background">
        <img src={germantutor} alt="Trevor Dunah - German Tutor" />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <span className="hero-label">About</span>
          <h1 className="hero-title">Trevor Dunah</h1>
          <div className="hero-divider"></div>
          <p className="hero-description">
            German Tutor, Author & Mentor
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero