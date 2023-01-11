import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram, BsWhatsapp} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='headerSocial'>
      <a href='https://www.linkedin.com/' target="_blanck"><BsLinkedin/></a>
      <a href='https://www.github.com/' target="_blanck"><BsGithub/></a>
      <a href='https://www.instagram.com/' target="_blanck"><BsInstagram/></a>
      <a href='https://www.whatsapp.com/' target="_blanck"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials
