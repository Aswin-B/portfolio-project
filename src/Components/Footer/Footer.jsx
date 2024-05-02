import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>ASWIN</h1>
                <p>I'am a Frontend Developer from Cuddalore around 1 year of Experience.</p>
            </div>
            
        </div>
        <hr />  
        <div className="footer-bottom">
            <p className='footer-bottom-left'>&#169; 2024 Aswin. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer