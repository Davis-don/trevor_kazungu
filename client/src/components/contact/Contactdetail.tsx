import './conatctdetail.css'

function Contactdetail() {
  return (
    <div className="overall-contact-detail-container">
      <div className="contact-detail-wrapper">
        
        {/* Header */}
        <div className="contact-detail-header">
          <span className="contact-detail-subtitle">Let's Connect</span>
          <h2 className="contact-detail-title">Reach Out Anytime</h2>
          <div className="contact-detail-divider"></div>
          <p className="contact-detail-intro">
            I'm always open to new opportunities, collaborations, and conversations. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-detail-grid">
          
          {/* Email */}
          <div className="contact-card">
            <div className="contact-card-icon">✉️</div>
            <div className="contact-card-content">
              <h3 className="contact-card-label">Email</h3>
              <a href="mailto:trevor.dunah@email.com" className="contact-card-value">
                trevor.dunah@email.com
              </a>
              <span className="contact-card-response">Response within 24hrs</span>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="contact-card">
            <div className="contact-card-icon">💬</div>
            <div className="contact-card-content">
              <h3 className="contact-card-label">WhatsApp</h3>
              <a href="https://wa.me/1234567890" className="contact-card-value">
                +1 (234) 567-890
              </a>
              <span className="contact-card-response">Quickest response</span>
            </div>
          </div>

          {/* Call */}
          <div className="contact-card">
            <div className="contact-card-icon">📞</div>
            <div className="contact-card-content">
              <h3 className="contact-card-label">Call</h3>
              <a href="tel:+1234567890" className="contact-card-value">
                +1 (234) 567-890
              </a>
              <span className="contact-card-response">Mon-Fri, 9AM-6PM</span>
            </div>
          </div>

          {/* Instagram */}
          <div className="contact-card">
            <div className="contact-card-icon">📷</div>
            <div className="contact-card-content">
              <h3 className="contact-card-label">Instagram</h3>
              <a href="https://instagram.com/trevordunah" className="contact-card-value">
                @trevordunah
              </a>
              <span className="contact-card-response">Daily posts & stories</span>
            </div>
          </div>

          {/* Facebook */}
          <div className="contact-card">
            <div className="contact-card-icon">👍</div>
            <div className="contact-card-content">
              <h3 className="contact-card-label">Facebook</h3>
              <a href="https://facebook.com/trevordunah" className="contact-card-value">
                Trevor Dunah
              </a>
              <span className="contact-card-response">Community updates</span>
            </div>
          </div>

          {/* TikTok */}
          <div className="contact-card">
            <div className="contact-card-icon">🎵</div>
            <div className="contact-card-content">
              <h3 className="contact-card-label">TikTok</h3>
              <a href="https://tiktok.com/@trevordunah" className="contact-card-value">
                @trevordunah
              </a>
              <span className="contact-card-response">Educational content</span>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="contact-detail-footer">
          <p className="contact-detail-note">
            🌟 Looking forward to connecting with you!
          </p>
        </div>

      </div>
    </div>
  )
}

export default Contactdetail