import './books.css'
import Hero from '../components/books/Hero'
import Bookslist from '../components/books/Bookslist'
function Books() {
  return (
    <div className="overall-bools-page-container">
      <Hero />
      <Bookslist />
    </div>
  )
}

export default Books