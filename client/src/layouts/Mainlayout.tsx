import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Sidebar from '../components/sidebar/Sidebar'
import './mainlayout.css'
import { useMountSidebar } from '../store/mountSidebar';
function Mainlayout({  children,}: { children: React.ReactNode }) {
  const { isMounted } = useMountSidebar();
  return (
    <div className="overall-main-layout-container">
        <Header />
        <div className="main-layout-content-container">
          <div className="actual-children-container">
    {children}
          </div>
           <div className="sidebar-links-container">
             {isMounted && <Sidebar />}
           </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Mainlayout