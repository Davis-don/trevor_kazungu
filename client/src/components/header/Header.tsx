import './header.css'
import Topheadersection from './Topheadersection'
import Brandname from './Brandname'
import Navlinks from './Navlinks'

function Header() {
  return (
    <div className="overall-main-header-component">
      <div className="top-section-header-container">
  <Topheadersection />
      </div>
      <div className="container-section-bottom">
     <div className="bottom-section-header-section-container">
           <Brandname />
          </div> 
          <div className="navlinks-section-container">
            <Navlinks />
          </div>
      </div>
       
          </div>
  )
}

export default Header