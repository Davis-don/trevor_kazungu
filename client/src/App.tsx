import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout'
import Homepage from './pages/Homepage'
import Books from './pages/Books'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={
            <Mainlayout>
              <Homepage />
            </Mainlayout>
          } />
          <Route path="/books" element={
            <Mainlayout>
              <Books />
            </Mainlayout>
          } />
          <Route path="/about" element={
            <Mainlayout>
              <About />
            </Mainlayout>
          } />
          <Route path="/contact" element={
            <Mainlayout>
              <Contact />
            </Mainlayout>
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
