import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/photo.jpg'
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Aswin Balamurugan,</span> Frontend Developer.</h1>
        <p>I am a Frontend developer from Cuddalore around 1 year of experience.</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
            </div>
            <div className="hero-resume">
              <a href={resume} download>My Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Hero