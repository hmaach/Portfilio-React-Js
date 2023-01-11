import React from 'react'
import './footer.css'
import {BsTwitter, BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <h5>My social media</h5><br />
    <div className="social_footer">
      <a href="https://github.com/hamzamaach"><BsGithub/></a>
      <a href="https://www.instagram.com/hamza_maax/"><BsInstagram/></a>
      <a href="https://www.linkedin.com/in/hamzamaach"><BsLinkedin/></a>
      <a href="https://twitter.com/hamza_maax"><BsTwitter/></a>
      <a href="https://t.me/hamzamaach"><FaTelegramPlane/></a>
    </div>
    </footer>
  )
}

export default Footer
