import React from 'react'
import './competence.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaPhp } from 'react-icons/fa'
// import competence from '../../data/data.json'

const Competence = () => {
  const competence = [
    {
      "filter": "hard-skills",
      "categorie": "Les langages de programmation",
      "about": [
        "Python",
        "Php",
        "JavaScript",
        "MySQL",
        "MongoDB",
        "Python",
        "Php",
        "JavaScript",
        "MySQL",
        "Python",
        "Php",
        "JavaScript",
        "MySQL"
      ]
    },
    {
      "categorie": "Les langages de programmation",
      "about": [
        "Python",
        "Php",
        "JavaScript",
        "MySQL",
        "MongoDB"
      ]
    },
    {
      "categorie": "Les langages de programmation",
      "about": [
        "Python",
        "Php",
        "JavaScript",
        "MySQL",
        "MongoDB"
      ]
    },
    {
      "categorie": "Les langages de programmation",
      "about": [
        "Python",
        "Php",
        "JavaScript",
        "MySQL",
        "MongoDB"
      ]
    },
    {
      "categorie": "Les langages de programmation",
      "about": [
        "Python",
        "Php",
        "JavaScript",
        "MySQL",
        "MongoDB"
      ]
    },
    {
      "categorie": "Les langages de programmation",
      "about": [
        "Python",
        "Php",
        "JavaScript",
        "MySQL",
        "MongoDB"
      ]
    },
    {
      "categorie": "Les langages de programmation",
      "about": [
        "Python",
        "Php",
        "JavaScript",
        "MySQL",
        "MongoDB"
      ]
    }
  ]

  
  return (
    <section id='competence'>
      <h5>what skills i have ?</h5>
      <h2>Mes Competence</h2>
      <div className="competence_filter">
        <button className='btn-competence_filter'>Hard-Skills</button>
        <button className='btn-competence_filter'>Hard-Skills</button>
        <button className='btn-competence_filter'>Logiciels</button>
        <button className='btn-competence_filter'>Other</button>
      </div>

      <div className="container competence_container">

        <div className="competence_fronEnd">
          <h3>Front-End </h3>
          <div className="competence_content">
            {competence.map((competence, index) =>

              <article className="competence_detail" id={index}>
                <AiOutlineHtml5 className='competence_detail-icon' />
                <div>
                  <h4 className="text-light-h4">{competence.categorie}</h4>
                  <p className="text-light">
                    {
                      competence.about.map(competence =>
                        <span>{competence}, </span>
                      )}
                  </p>
                </div>
              </article>
            )}
          </div>
        </div>

      </div>
    </section >
  )
}

export default Competence
