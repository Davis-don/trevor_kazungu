import './about.css'
import Hero from '../components/about/Hero'
import Moreabout from '../components/about/Moreabout'

function About() {
  return (
    <div className="overall-about-page-container">
        <Hero/>
        <Moreabout/>
    </div>
  )
}

export default About