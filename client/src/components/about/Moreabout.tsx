import './moreabout.css'
import germanTutorImg from '../../assets/images/IMG_0197.jpg'

function Moreabout() {
  return (
    <div className="overall-moreabout-container">
      
      {/* Section 1 - German Tutor (White Background) */}
      <section className="moreabout-section section-white">
        <div className="moreabout-content">
          <div className="moreabout-text">
            <div className="moreabout-number">01</div>
            <h2 className="moreabout-title">German Tutor</h2>
            <div className="moreabout-divider"></div>
            <p className="moreabout-description">
              Passionate about teaching the German language to students of all levels. 
              I create engaging, personalized lessons that make learning German enjoyable 
              and effective. From beginners to advanced learners, I tailor each session 
              to meet individual goals and learning styles.
            </p>
            <div className="moreabout-tags">
              <span className="tag">Beginner to Advanced</span>
              <span className="tag">Conversational German</span>
              <span className="tag">Exam Preparation</span>
            </div>
          </div>
          <div className="moreabout-image">
            <img src={germanTutorImg} alt="German Tutor" />
            <div className="image-overlay-dark"></div>
          </div>
        </div>
      </section>

      {/* Section 2 - Mentor (Dark Blue Background) */}
      <section className="moreabout-section section-darkblue">
        <div className="moreabout-content">
          <div className="moreabout-image">
            <img src={germanTutorImg} alt="Mentor" />
            <div className="image-overlay-light"></div>
          </div>
          <div className="moreabout-text">
            <div className="moreabout-number">02</div>
            <h2 className="moreabout-title">Mentor</h2>
            <div className="moreabout-divider"></div>
            <p className="moreabout-description">
              Guiding individuals on their personal and professional development journey. 
              I provide mentorship that empowers people to unlock their full potential, 
              build confidence, and achieve their goals through structured guidance and 
              unwavering support.
            </p>
            <div className="moreabout-tags">
              <span className="tag">Personal Development</span>
              <span className="tag">Career Guidance</span>
              <span className="tag">Goal Setting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Author/Writer (White Background) */}
      <section className="moreabout-section section-white">
        <div className="moreabout-content">
          <div className="moreabout-text">
            <div className="moreabout-number">03</div>
            <h2 className="moreabout-title">Author & Writer</h2>
            <div className="moreabout-divider"></div>
            <p className="moreabout-description">
              Crafting compelling stories and educational content that inspire and educate. 
              As a published author, I bring ideas to life through the written word, 
              sharing knowledge and experiences that resonate with readers.
            </p>
            <div className="moreabout-tags">
              <span className="tag">Published Author</span>
              <span className="tag">Educational Content</span>
            </div>
          </div>
          <div className="moreabout-image">
            <img src={germanTutorImg} alt="Author & Writer" />
            <div className="image-overlay-dark"></div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Moreabout