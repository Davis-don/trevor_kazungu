import './hero.css'

function Hero() {
  return (
    <div className="overall-hero-container">
      {/* Background with creative pattern */}
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <div className="hero-badge">📚 My Collection</div>
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

        {/* Books floating display */}
        <div className="hero-books-display">
          <div className="book-card book-1">
            <div className="book-spine"></div>
            <div className="book-cover">
              <div className="book-title-text">1000 Essential</div>
              <div className="book-title-text">German Sentences</div>
              <div className="book-author-text">Trevor Dunah</div>
            </div>
          </div>
          <div className="book-card book-2">
            <div className="book-spine"></div>
            <div className="book-cover">
              <div className="book-title-text">Coming Soon</div>
              <div className="book-author-text">Trevor Dunah</div>
            </div>
          </div>
          <div className="book-card book-3">
            <div className="book-spine"></div>
            <div className="book-cover">
              <div className="book-title-text">New Release</div>
              <div className="book-author-text">Trevor Dunah</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero