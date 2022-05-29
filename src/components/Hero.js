import React from 'react'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

import logo from '../assets/images/logo.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="title">
        <h1>Nesbeer As</h1>
      </div>
      <div className="tags">
        <h3>Full Stack Developer ( Developer / Designer / Discord Bot Developer / Youtuber )</h3>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="about">
        <h3>About Me</h3>
        <p>
          I'am a Full Stack Developer, Designer, Discord Bot Developer, and Youtuber. Based In India / Kerala With a passion for developing cool discord bots and websites
        </p>
        <button><Link to="/works">My Projects <AiOutlineArrowRight /></Link></button>
      </div>
    </div>
  )
}

export default Hero
