import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'
import { IoMdMan } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Full-Stack Web</h5>
        <h1> Hamza MAACH</h1>

        {/* ------------- */}
        <div className="header_container2">




          <div className="profil">
            <CTA />
            <HeaderSocials />
            <div className="me">
              <img src={ME} alt="me" />
            </div>



          </div>
          <div className="about">
            <section id="about">
              <h2>A propos de moi</h2>
              <div className="info">
                <span className="location"><MdLocationOn className='location-icon' />berkane,maroc</span>
                <span className="age"><IoMdMan className='age-icon' />20 Ans</span>
              </div>
              <p>J'étudie actuellement le développement digital Web, et je
                suis en formation d'innovation entrepreneuriale. Toujours
                à la recherche d'innovations, de nouveaux programmes et
                outils de développement. Je m'intéresse à la gestion de
                projet pour SaaS software (Méthodes Agiles, SCRUM).
                Je suis passionné par la digitalisation et les innovations
                digitales surtout dans le domaine de l'agroculture.
              </p>
            </section>
          </div>



        </div>
      </div>
    </header>
  )
}

export default Header
