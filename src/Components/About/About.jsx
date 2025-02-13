import React from 'react'
import './About.css'
import About_img from '../../assets/About.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className= 'about' id='about'>
      <div className="about-left">
        <img src={About_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
    <h3>About Unviversity</h3>
    <h2>Nurturing tomorrows leader today</h2>
    <p>Embark on a transformative education journey with our university comprehensive education programs. Our cutting-edge curriculum is designed to empower the students with the knowledge,skills, and experiences needed to excel in the dynamic field of education</p>
   <p>With a focus on innovation  hands on learning, and personalized mentorship our programs prepare aspiringeducators to make a meaningful impact in schools</p>
   <p>Whether you aspire to became a teacher, administator, Councler or  educational leader our siserve range of programs offers the perfect pathway to achieve your goals.</p>
    </div>
    </div>
  )
}

export default About
