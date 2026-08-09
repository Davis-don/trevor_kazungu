import './homepage.css'
import Hero from '../components/homepage/Hero'
import Homepageabout from '../components/homepage/Homepageabout'
import Latestbook from '../components/homepage/Latestbook'

function Homepage() {
  return (
    <div className="overall-homepage-container">
      <Hero />
      <Homepageabout />
      <Latestbook />
    </div>
  )
}

export default Homepage