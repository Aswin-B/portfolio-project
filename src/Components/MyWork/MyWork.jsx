import React from 'react'
import './MyWork.css'
import project from '../../assets/project.png'

const MyWork = () => {
  return (
    <div className='mywork' id='work'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
        </div>
        <div className="mywork-container">
            <img src={project} alt="" />
            <p>Created My own Personal Portfolio project to show case my skills.</p>
        </div>
    </div>
  )
}

export default MyWork