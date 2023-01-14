import React, { useState } from 'react'
import './competence.css'
import { BiBoltCircle } from 'react-icons/bi'
import FilterCom from './FilterCom'
import data from '../../data/data.json'

const Competence = () => {
  const [filtred, setFiltred] = useState([])
  const [activeButton, setActiveButton] = useState("hardskills")
  const competences = data.competence

  return (
    <section id='competence'>
      <h5>Quelles compétences j'ai ?</h5>
      <h2>Mes Competences</h2>
      <FilterCom
        competences={competences}
        activeButton={activeButton}
        setFiltred={setFiltred}
        setActiveButton={setActiveButton}
      />
      <div className="container competence_container">
        <div className="competence_fronEnd">
          {activeButton === "hardskills" && <h3>Hard-Skills</h3>}
          {activeButton === "softskills" && <h3>Soft-Skills</h3>}
          {activeButton === "logiciels" && <h3>Logiciels</h3>}
          {activeButton === "other " && <h3>Other</h3>}
          <div className="competence_content">
            {filtred.map((competence1, index1) =>
              <article className="competence_detail" key={index1}>
                <span className='competence_detail-icon' >O</span>
                <div>
                  <h4 className="text-light-h4">{competence1.categorie}</h4>
                  <p className="text-light">
                    {
                      competence1.about.map((item, index2) =>
                        <span key={index2}>{item} {index2 !== (competence1.about.length - 1) && ','}  </span> 
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
