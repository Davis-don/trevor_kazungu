import './contact.css'
import Hero from '../components/contact/Hero'
import Contactdetail from '../components/contact/Contactdetail'

function Contact() {
  return (
    <div className="overall-contact-page-container">
        <Hero/>
        <Contactdetail/>
    </div>
  )
}

export default Contact