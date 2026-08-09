import './header.css'
import Topheadersection from './Topheadersection'
import Brandname from './Brandname'

function Header() {
  return (
    <div className="overall-main-header-component">
      <div className="top-section-header-container">
  <Topheadersection />
      </div>
        <div className="bottom-section-header-section-container">
           <Brandname />
          </div> 

          </div>
  )
}

export default Header