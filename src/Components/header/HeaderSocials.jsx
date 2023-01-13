import React from 'react'
import data from '../../data/data.json'
import { BsLinkedin, BsGithub, BsInstagram, BsWhatsapp} from 'react-icons/bs'


const HeaderSocials = () => {
 
  const contact = data.contact;


  return (
    <div className='headerSocial'>
      <a href={'https://www.linkedin.com/'+contact.linkedin} target="_blanck"><BsLinkedin/></a>
      <a href={'https://www.github.com/'+contact.github} target="_blanck"><BsGithub/></a>
      <a href={'https://www.instagram.com/'+contact.instagram} target="_blanck"><BsInstagram/></a>
      <a href={'https://wa.me/'+contact.whatsapp} target="_blanck"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials
