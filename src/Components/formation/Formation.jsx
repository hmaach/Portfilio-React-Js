import React from 'react'
import './formation.css'
import { MdComputer } from 'react-icons/md'
import { BsInfoCircleFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { BiTimeFive } from 'react-icons/bi'
import Me2 from '../../assets/me2.jpeg'

const Formation = () => {
  const formations = [
    {
      "titre": "TECHNICIEN SPÉCIALISÉ EN DÉVELOPPEMENT DIGITAL",
      "instute" : "Institut des technologies appliquée Berkane",
      "ref" : "OFPPT",
      "date" :"Depuis septembre 2021"
    },
    {
      "titre": "PROGRAMME D'INNOVATION ENTREPRENEURIALE (PIE)",
      "instute" : "Institut des technologies appliquée Berkane",
      "ref" : "OFPPT",
      "date" :"Depuis octobre 2021"
    },
    {
      "titre": "BACCALAURÉAT SCIENCE EXPÉRIMENTALE",
      "instute" : "Lycee ABOU LKHAIR, Berkane",
      "ref" : "",
      "date" :"juillet 2020"
    },
  ]
  return (
    <section id="formation">

      <h5>hhhhh</h5>
      <h2>Formation</h2>
      <div className="container formation_container">
        <div className="me2">
          <img src={Me2} alt="me" className="me2-image"/>
        </div>
        <div className="formations">
          {
            formations.map(formation => 
              <article className="formation">
            <span className="titref">{formation.titre}</span>
            <h5 className="wheref"><ImLocation className='wheref-icon' />{formation.ref}
            {formation.ref && " | " } 
             {formation.instute}</h5>
            <small className="whenf"><BiTimeFive className='whenf-icon' />{formation.date}</small>
          </article>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Formation
