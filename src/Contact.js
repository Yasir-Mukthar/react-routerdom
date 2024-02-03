import { NavLink, Outlet } from "react-router-dom";
import "./App.css"
export default function Contact() {
  return (
    <>
    <h3>Contact Us</h3>
    <NavLink className="links" to="email" >Email</NavLink>
    <NavLink to="phone" className="links">Phone</NavLink>
    <div className="contact-info">
<Outlet/>
    </div>
    </>
  )
}
