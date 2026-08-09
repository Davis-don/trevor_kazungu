import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Sidebar from '../components/sidebar/Sidebar'
import './mainlayout.css'
import { useMountSidebar } from '../store/mountSidebar'

function Mainlayout({ children }: { children: React.ReactNode }) {
  const { isMounted } = useMountSidebar()

  return (
    <>
      <Header />

      <div className="main-layout-content-container">
        <div className="actual-children-container">
          {children}
        </div>
        
        {/* Sidebar - Fixed position */}
        <div className="sidebar-links-container">
          {isMounted && <Sidebar />}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Mainlayout