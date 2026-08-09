import './homepageabout.css'
import germantutor from '../../assets/images/IMG_0197.jpg'
import { Link } from 'react-router-dom'

function Homepageabout() {
  return (
    <div className="overall-about-container">
      <div className="about-inner-wrapper">
        {/* Left side - Image */}
        <div className="about-image-wrapper">
          <div className="about-image-container">
            <img src={germantutor} alt="Trevor Dunah" />
            <div className="about-image-overlay"></div>
          </div>
          <div className="about-experience-badge">
            <span className="badge-number">5+</span>
            <span className="badge-text">Years of Excellence</span>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="about-content-wrapper">
          <div className="about-section-label">MEET TREVOR</div>
          <h2 className="about-title">
            Empowering Lives Through{' '}
            <span className="about-title-highlight">Leadership & Mentorship</span>
          </h2>
          
          <div className="about-divider"></div>
          
          <p className="about-description">
            Trevor Dunah is a dynamic leader with a proven ability to inspire and guide teams towards success. 
            His leadership skills are complemented by his expertise as a modeling coach, where he effortlessly 
            cultivates individual potential for personal and professional growth. Trevor's proficiency extends 
            to the stage, where his engaging MCing captivates audiences, showcasing his excellent communication skills.
          </p>
          
          <p className="about-description-second">
            Trevor is also the accomplished author of <span className="about-book-highlight">"1000 Essential German Sentences for Beginners,"</span> 
            a comprehensive guide designed to help language learners build a strong foundation in German. 
            This book reflects his passion for teaching and his commitment to making language learning accessible 
            and enjoyable for everyone.
          </p>
          
          <p className="about-description-third">
            In addition to his versatile skill set, Trevor is a compassionate life coach and peer counselor, 
            providing invaluable support on the journey to self-discovery. Whether in leadership, modeling coaching, 
            MCing, life coaching, or peer counseling, Trevor Dunah brings a holistic approach, making a positive 
            impact and empowering others to reach their full potential.
          </p>

          {/* Stats in a row */}
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Lives Impacted</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Book Published</span>
            </div>
          </div>

          {/* Single Contact Button */}
          <div className="about-cta">
            <Link to="/contact" className="about-btn-link">
              <button className="about-btn-primary">Get In Touch</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepageabout