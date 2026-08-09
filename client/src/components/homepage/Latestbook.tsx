import './latestbook.css'

function Latestbook() {
  return (
    <div className="overall-latestbook-container">
      <div className="latestbook-inner-wrapper">
        {/* Left side - Content */}
        <div className="latestbook-content-wrapper">
          <div className="latestbook-section-label">Latest Release</div>
          <h2 className="latestbook-title">
            1000 Essential <br />
            <span className="latestbook-title-highlight">German Sentences</span>
          </h2>
          <div className="latestbook-divider"></div>
          <p className="latestbook-description">
            Master the German language with this comprehensive guide designed for beginners. 
            This book contains 1000 carefully curated sentences that will help you build a 
            strong foundation in German grammar, vocabulary, and pronunciation.
          </p>
          <p className="latestbook-description-second">
            Whether you're a complete beginner or looking to refresh your skills, this book 
            provides practical, everyday sentences that you can use in real-life conversations. 
            Each sentence comes with English translation and pronunciation guide.
          </p>
          <div className="latestbook-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">1000 Essential Sentences</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">English Translations</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Pronunciation Guide</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Beginner Friendly</span>
            </div>
          </div>
          <a 
            href="https://www.amazon.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="latestbook-btn-link"
          >
            <button className="latestbook-btn-primary">Buy on Amazon</button>
          </a>
        </div>

        {/* Right side - Book Cover Image */}
        <div className="latestbook-image-wrapper">
          <div className="latestbook-image-container">
            <img 
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=700&fit=crop&crop=center" 
              alt="1000 Essential German Sentences Book Cover" 
            />
            <div className="latestbook-image-overlay"></div>
            <div className="latestbook-image-border"></div>
          </div>
          <div className="latestbook-badge">
            <span className="badge-text">New Release</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Latestbook