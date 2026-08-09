import './sidebar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMountSidebar } from '../../store/mountSidebar'

function Sidebar() {
  const { toggle } = useMountSidebar()
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (path: string) => {
    // close/open sidebar
    toggle()

    // navigate to page
    navigate(path)

    // smooth scroll to top after navigation
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  }

  return (
    <div className="overall-sidebar-container">
      <ul className="navlink-list-sidebar">
        <li
          className={location.pathname === '/' ? 'sidebar-active-link' : ''}
          onClick={() => handleNavigate('/')}
        >
          Home
        </li>

        <li
          className={location.pathname === '/books' ? 'sidebar-active-link' : ''}
          onClick={() => handleNavigate('/books')}
        >
          Books
        </li>

        <li
          className={location.pathname === '/about' ? 'sidebar-active-link' : ''}
          onClick={() => handleNavigate('/about')}
        >
          About
        </li>

        <li
          className={location.pathname === '/contact' ? 'sidebar-active-link' : ''}
          onClick={() => handleNavigate('/contact')}
        >
          Contact
        </li>
      </ul>
    </div>
  )
}

export default Sidebar