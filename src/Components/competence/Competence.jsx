import React from 'react'
import './competence.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaPhp } from 'react-icons/fa'

const Competence = () => {
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
            
            <article className="competence_detail">
              <AiOutlineHtml5 className='competence_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">expert</small>
              </div>
            </article>
            <article className="competence_detail">
              <AiOutlineHtml5 className='competence_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">expert</small>
              </div>
            </article>
            <article className="competence_detail">
              <AiOutlineHtml5 className='competence_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">expert</small>
              </div>
            </article>
            <article className="competence_detail">
              <AiOutlineHtml5 className='competence_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">expert</small>
              </div>
            </article>
            <article className="competence_detail">
              <AiOutlineHtml5 className='competence_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">expert</small>
              </div>
            </article>
          </div>
        </div>
        
      </div>
    </section >
  )
}

export default Competence
