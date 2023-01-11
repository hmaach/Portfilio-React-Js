import React from 'react'
import './certificat.css'
import {BiTimeFive} from 'react-icons/bi'
import {FiExternalLink} from 'react-icons/fi'
const Certificat = () => {
  return (
    <section id="certificat">
        <h5>hhhhhh</h5>
        <h2>Certificat</h2>
      <div className="container certificat_container">
        <div className="filter">
            <button className='btn-filter'>All</button>
            <button className='btn-filter'>Front-End</button>
            <button className='btn-filter'>Back-End</button>
            <button className='btn-filter'>Data Base</button>
            <button className='btn-filter'>Other</button>
        </div>
        <div className="certificats">
            <article className="certificat">
                <span className='titre'>Sites djezedjkj web static</span>
                <h5 className="where">hackerRank</h5>
                <small className="when"><BiTimeFive className='when-icon'/>mars 2022 </small>
                <small className="id"><span className='id-icon'>Id :</span> BUD767Z6Z6</small>
                <div className='divAfficher'>
                    <a href="#" target="_blank" className='Afficher' >Afficher <FiExternalLink/></a>
                    </div>
            </article>
            <article className="certificat">
                <span className='titre'>Sitese fzfzezzefe web static</span>
                <h5 className="where">hackerRank</h5>
                <small className="when"><BiTimeFive className='when-icon'/>mars 2022 </small>
                <small className="id"><span className='id-icon'>Id :</span> BUD767Z6Z6</small>
                <div className='divAfficher'>
                    <a href="#" target="_blank" className='Afficher' >Afficher <FiExternalLink/></a>
                    </div>
            </article>
            <article className="certificat">
                <span className='titre'>Sites web static</span>
                <h5 className="where">hackerRank</h5>
                <small className="when"><BiTimeFive className='when-icon'/>mars 2022 </small>
                <small className="id"><span className='id-icon'>Id :</span> BUD767Z6Z6</small>
                <div className='divAfficher'>
                    <a href="#" target="_blank" className='Afficher' >Afficher <FiExternalLink/></a>
                    </div>
            </article>
            <article className="certificat">
                <span className='titre'>Sites web static</span>
                <h5 className="where">hackerRank</h5>
                <small className="when"><BiTimeFive className='when-icon'/>mars 2022 </small>
                <small className="id"><span className='id-icon'>Id :</span> BUD767Z6Z6</small>
                <div className='divAfficher'>
                    <a href="#" target="_blank" className='Afficher' >Afficher <FiExternalLink/></a>
                    </div>
            </article>
            <article className="certificat">
                <span className='titre'>Sites web static</span>
                <h5 className="where">hackerRank</h5>
                <small className="when"><BiTimeFive className='when-icon'/>mars 2022 </small>
                <small className="id"><span className='id-icon'>Id :</span> BUD767Z6Z6</small>
                <div className='divAfficher'>
                    <a href="#" target="_blank" className='Afficher' >Afficher <FiExternalLink/></a>
                    </div>
            </article>
            <article className="certificat">
                <span className='titre'>Sites web static</span>
                <h5 className="where">hackerRank</h5>
                <small className="when"><BiTimeFive className='when-icon'/>mars 2022 </small>
                <small className="id"><span className='id-icon'>Id :</span> BUD767Z6Z6</small>
                <div className='divAfficher'>
                    <a href="#" target="_blank" className='Afficher' >Afficher <FiExternalLink/></a>
                    </div>
            </article>
            <article className="certificat">
                <span className='titre'>Sites web static</span>
                <h5 className="where">hackerRank</h5>
                <small className="when"><BiTimeFive className='when-icon'/>mars 2022 </small>
                <small className="id"><span className='id-icon'>Id :</span> BUD767Z6Z6</small>
                <div className='divAfficher'>
                    <a href="#" target="_blank" className='Afficher' >Afficher <FiExternalLink/></a>
                    </div>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Certificat
