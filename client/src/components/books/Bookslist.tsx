import './booklist.css'

function Bookslist() {
  return (
    <div className="overall-bookslist-container">
      <div className="bookslist-header">
        <h2 className="bookslist-title">Featured Book</h2>
        <div className="bookslist-divider"></div>
        <p className="bookslist-subtitle">Start your German learning journey today</p>
      </div>

      <div className="bookslist-grid">
        {/* Featured Book - 1000 Essential German Sentences */}
        <div className="book-item featured-book">
          <div className="book-item-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=650&fit=crop&crop=center" 
              alt="1000 Essential German Sentences" 
              className="book-item-image"
            />
            <div className="book-item-overlay"></div>
            <div className="book-item-badge">★ Bestseller</div>
            <div className="book-item-ribbon">
              <span>New</span>
            </div>
          </div>
          <div className="book-item-content">
            <div className="book-item-number">01</div>
            <h3 className="book-item-title">1000 Essential German Sentences</h3>
            <p className="book-item-subtitle">For Beginners</p>
            <div className="book-item-divider"></div>
            <p className="book-item-description">
              Master the German language with this comprehensive guide designed for beginners. 
              This book contains 1000 carefully curated sentences that will help you build a 
              strong foundation in German grammar, vocabulary, and pronunciation.
            </p>
            
            <div className="book-item-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>1000 Essential Sentences</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>English Translations</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Pronunciation Guide</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Beginner Friendly</span>
              </div>
            </div>

            <div className="book-item-details">
              <div className="book-item-price">
                <span className="price-label">Price</span>
                <span className="price-amount">KSh 600</span>
              </div>
              <div className="book-item-rating">
                <span className="rating-stars">★★★★★</span>
                <span className="rating-count">(24 reviews)</span>
              </div>
            </div>
            
            <a 
              href="https://www.amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="book-item-btn"
            >
              Buy Now on Amazon
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookslist