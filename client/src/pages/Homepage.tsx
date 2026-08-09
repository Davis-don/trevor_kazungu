import './homepage.css'
import Hero from '../components/homepage/Hero'
import Homepageabout from '../components/homepage/Homepageabout'

function Homepage() {
  return (
    <div className="overall-homepage-container">
      <Hero />
      <Homepageabout />
    </div>
  )
}

export default Homepage