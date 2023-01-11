import React from 'react'
import './formation.css'
import { MdComputer } from 'react-icons/md'
import { BsInfoCircleFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { BiTimeFive } from 'react-icons/bi'
import Me2 from '../../assets/me2.jpeg'

const Formation = () => {
  return (
    <section id="formation">

      <h5>hhhhh</h5>
      <h2>Formation</h2>
      <div className="container formation_container">
        <div className="me2">
          <img src={Me2} alt="me" className="me2-image"/>
        </div>
        <div className="formations">
          <article className="formation">
            <span className="titref">TECHNICIEN SPÉCIALISÉ EN DÉVELOPPEMENT DIGITAL</span>
            <h5 className="wheref"><ImLocation className='wheref-icon' />OFPPT | Institut des technologies appliquée Berkane</h5>
            <small className="whenf"><BiTimeFive className='whenf-icon' />Depuis septembre 2021</small>
          </article>
          <article className="formation">
            <span className="titref">TECHNICIEN SPÉCIALISÉ EN DÉVELOPPEMENT DIGITAL</span>
            <h5 className="wheref"><ImLocation className='wheref-icon' />OFPPT | Institut des technologies appliquée Berkane</h5>
            <small className="whenf"><BiTimeFive className='whenf-icon' />Depuis septembre 2021</small>
          </article>
          <article className="formation">
            <span className="titref">TECHNICIEN SPÉCIALISÉ EN DÉVELOPPEMENT DIGITAL</span>
            <h5 className="wheref"><ImLocation className='wheref-icon' />OFPPT | Institut des technologies appliquée Berkane</h5>
            <small className="whenf"><BiTimeFive className='whenf-icon' />Depuis septembre 2021</small>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Formation
