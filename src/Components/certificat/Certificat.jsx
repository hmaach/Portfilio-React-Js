import React, { useState } from 'react'
import './certificat.css'
import { BiTimeFive } from 'react-icons/bi'
import { AiFillCaretRight } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import { TbCertificate } from 'react-icons/tb'
import Filter from './Filter'
import data from '../../data/data.json'
import { motion } from 'framer-motion'


const Certificat = () => {

    const [filtred, setFiltred] = useState([])
    const [activeButton, setActiveButton] = useState("all")

    const certificats = data.certificat


    return (
        <section id="certificat">
            <h5>On pourrait apprendre beaucoup à partir de certificats</h5>
            <h2>Mes Certificats</h2>
            <div className="container certificat_container">
                <Filter
                    certificats={certificats}
                    setFiltred={setFiltred}
                    activeButton={activeButton}
                    setActiveButton={setActiveButton}
                />
                <motion.div L ayout className="certificats">

                    {
                        filtred.map((item) =>

                            <motion.div layout className="certificat" >
                                <div className="card card_container">

                                    <div className="card card_titre">
                                        <div className="card_icon">
                                            <TbCertificate className='titre-icon' />
                                        </div>
                                        <div className="titre_card">
                                            <span className='titre'>{item.titre}</span>
                                        </div>
                                    </div>
                                    <div className="card_detail">


                                        <div className="card card_from">
                                            <h5 className="from">{item.from}</h5>
                                        </div>


                                        <div className="card card_date">
                                            <small className="when">{item.date}</small>
                                        </div>

                                        <div className="card card_id">
                                            <small className="id">id: {item.id}</small>

                                        </div>
                                        <div className='card card_afficher'>
                                            <a href={item.lien} target="_blank" className='Afficher' >Afficher <FiExternalLink /></a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        )}
                </motion.div>
            </div>
        </section>
    )
}

export default Certificat
