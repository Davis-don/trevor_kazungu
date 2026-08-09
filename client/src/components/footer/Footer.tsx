import './footer.css'
import Brandname from '../header/Brandname'

function Footer() {
  return (
    <div className="overall-footer-container">
      <Brandname />
      <div className="botton-copyright-section">
       <p>&copy; 2023 My App. All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer