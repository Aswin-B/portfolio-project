import React, { useRef, useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className='navbar'>
        {/* <img src={logo} alt="" /> */}
        <h1>ASWIN</h1>
        <i className='fas fa-bars nav-mob-open' onClick={openMenu}></i>
        <ul className="navbar-menu" ref={menuRef}>
          <i className='fas fa-times nav-mob-close' onClick={closeMenu}></i>
          <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={10} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>My Work</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="navbar-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
    </div>
  )
}

export default Navbar