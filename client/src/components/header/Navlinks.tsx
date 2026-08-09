import './navlink.css'
import { LuMenu } from "react-icons/lu";

function Navlinks() {
  return (
   <div className="overall-navlink-container">
    <ul className="navlink-list">
        <li>HOME</li>
        <li>BOOKS</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
    </ul>
    <div className="side-bar-container">
    <LuMenu />
    </div>
   </div>
  )
}

export default Navlinks