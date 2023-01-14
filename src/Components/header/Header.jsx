import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'
import { IoMdMan } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import data from '../../data/data.json'



const Header = () => {
  const information = data
  const Me1 = information.images.me3

  
  const dateN = information.dateNaissance
  function calculateAge(birthdate){
    var today = new Date();
    var birthdate = new Date(birthdate);
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
  }
  

    
  return (
    <header>
      <div className="container header_container">
        <h5>{information.metier}</h5>
        <h1> {information.nom}</h1>

        {/* ------------- */}
        <div className="header_container2">




          <div className="profil">
            <CTA />
            <HeaderSocials />
            <div className="me">
              <img src={Me1} alt="me" />
            </div>



          </div>
          <div className="about">
            <section id="about">
              <h2>A propos de moi</h2>
              <div className="info">
                <span className="location"><MdLocationOn className='location-icon' />{information.ville}, {information.pays}</span>
                <span className="age"><IoMdMan className='age-icon' />{calculateAge(dateN)} Ans</span>
              </div>
              <p>{information.about}</p>
            </section>
          </div>



        </div>
      </div>
    </header>
  )
}

export default Header
