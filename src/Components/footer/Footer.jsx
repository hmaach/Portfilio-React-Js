import React from 'react'
import './footer.css'
import {BsTwitter, BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import data from '../../data/data.json'


const Footer = () => {

  const rs = data.contact
  return (
    <footer>
      <h5>Il s'agit de mes réseaux sociaux</h5><br />
    <div className="social_footer">
      <a target="_blank" href={"https://github.com/"+rs.github}><BsGithub/></a>
      <a target="_blank" href={"https://www.instagram.com//"+ rs.instagram }><BsInstagram/></a>
      <a target="_blank" href={"https://www.linkedin.com/in/"+ rs.linkedin}><BsLinkedin/></a>
      <a target="_blank" href={"https://twitter.com/"+  rs.twitter }><BsTwitter/></a>
      <a target="_blank" href={"https://t.me/"+rs.telegram}  ><FaTelegramPlane/></a>
    </div>
    </footer>
  )
}

export default Footer
