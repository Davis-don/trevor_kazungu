import './hero.css'
import germantutor from '../../assets/images/IMG_0197.jpg'

function Hero() {
  return (
    <div className="overall-hero-container">
      {/* Background Image */}
      <div className="hero-background">
        <img src={germantutor} alt="Trevor Dunah - Books" />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <span className="hero-label">My Collection</span>
          <h1 className="hero-title">
            Explore My <br />
            <span className="hero-title-highlight">Books</span>
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-description">
            Discover a world of knowledge, language, and inspiration through my carefully crafted books. 
            Each title is designed to empower, educate, and transform lives.
          </p>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="hero-stat-number">1</span>
              <span className="hero-stat-label">Books Published</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">1000+</span>
              <span className="hero-stat-label">Sentences</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">100+</span>
              <span className="hero-stat-label">Happy Readers</span>
            </div>
          </div>
          <div className="hero-cta">
            <a 
              href="https://www.amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-btn-link"
            >
              <button className="hero-btn-primary">Shop Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero