import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
export default function NavLayout() {

  return (
    <div className="container">
    <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
    </nav>
    <main className="main-content">
        <Outlet/>
        
    </main>
    <footer className="footer">
      Footer Content...
    </footer>
    </div>
  )
}
