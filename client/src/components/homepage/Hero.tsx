import './hero.css'
import germantutor from '../../assets/images/IMG_0197.jpg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const words = [
    'German Tutor',
    'Author',
    'Mentor'
  ]

  useEffect(() => {
    const currentWord = words[currentIndex]
    
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(timer)
    }

    if (isDeleting) {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timer)
      } else {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % words.length)
      }
    } else {
      if (displayText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timer)
      } else {
        setIsPaused(true)
      }
    }
  }, [displayText, isDeleting, isPaused, currentIndex, words])

  return (
    <div className="overall-hero-container">
      {/* Background Image with Dark Overlay */}
      <div className="hero-background">
        <img src={germantutor} alt="German Tutor" />
        <div className="hero-overlay"></div>
      </div>

      {/* Content on the left */}
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-title">Trevor Dunah</h1>
          <div className="hero-typing-wrapper">
            <span className="hero-typing-text">{displayText}</span>
            <span className="typed-cursor">|</span>
          </div>
          <p className="hero-subtitle">
            Empowering minds through language,<br />
            literature, and mentorship
          </p>
          <div className="hero-cta">
            <Link to="/books" className="hero-btn-link">
              <button className="hero-btn-primary">Purchase a Book</button>
            </Link>
            <Link to="/about" className="hero-btn-link">
              <button className="hero-btn-secondary">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero