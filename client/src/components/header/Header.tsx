import './header.css'
import Topheadersection from './Topheadersection'
import Brandname from './Brandname'
import Navlinks from './Navlinks'
import { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Add shadow when scrolled
      setIsScrolled(currentScrollY > 50)
      
      // Only hide/show after scrolling past 100px
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsHidden(true) // Scrolling down - hide header
        } else {
          setIsHidden(false) // Scrolling up - show header
        }
      } else {
        // Always show header when near the top
        setIsHidden(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className={`overall-main-header-component ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hide' : 'show'}`}>
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