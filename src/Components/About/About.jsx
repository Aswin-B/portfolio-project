import React from 'react'
import './About.css'
import profile_img from '../../assets/photo.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Highly motivated and dedicated candidate passionate about Web Development for building beautiful and functional websites and improving user experience and I have some good knowledge on Backend so that I can able to coloborate with my team and connect backend data through API's. I am excited about the opportunity to contribute my skills and work in your Organization and grow professionally in a Tech environment.</p>                    
                    <h3>Experience:</h3>
                    <p>Junior Software Engineer, LionOrbit Tech Solutions Pvt Ltd.</p>
                    <p>August, 2023 - March, 2024</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>CSS</p><hr style={{width: "60%"}}/></div>
                    {/* <div className="about-skill"><p>BootStrap</p><hr style={{width: "50%"}}/></div> */}
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>SQL</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width: "50%"}}/></div>
                </div>
            </div>
        </div>
        {/* <div className="about-achivements">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div> */}
    </div>
  )
}

export default About