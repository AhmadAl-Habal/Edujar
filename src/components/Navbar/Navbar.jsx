import React from 'react'
import logoImg from "../../assets/Edujar.png"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="content-container">
      <nav>
        <div className="logo-image">
          <img src={logoImg} alt="" />
        </div>
        <ul className="navigations">
          <li>Home</li>
          <li>Courses</li>
          <li>About us</li>
          <li>Works</li>
          <li>Blog</li>
          <li>Contacts</li>
          <li className="menu">Menu</li>
        </ul>
        <button>Signup</button>
      </nav>
    </div>
  );
}

export default Navbar