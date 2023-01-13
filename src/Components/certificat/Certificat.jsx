import React from 'react'
import './certificat.css'
import { BiTimeFive } from 'react-icons/bi'
import { AiFillCaretRight } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import { TbCertificate } from 'react-icons/tb'
const Certificat = () => {

    const certificats = [
        {
            "id": "9452f947fafb",
            "filter": "backEnd",
            "titre": "HTML CSrepfopoefpo,f if,ep,efi,frS",
            "date": "mars 2022",
            "from": "hackerank",
            "lien": "https://www.hackerrank.com/certificates/iframe/9452f947fafb"
        },
        {
            "id": "9452f947fafb",
            "filter": "backEnd",
            "titre": "HTML CSS",
            "date": "mars 2022",
            "from": "hackerank",
            "lien": "https://www.hackerrank.com/certificates/iframe/9452f947fafb"
        },
        {
            "id": "9452f947fafb",
            "filter": "backEnd",
            "titre": "HTML CSS",
            "date": "mars 2022",
            "from": "hackerank",
            "lien": "https://www.hackerrank.com/certificates/iframe/9452f947fafb"
        },
        {
            "id": "9452f947fafb",
            "filter": "backEnd",
            "titre": "HTML CSS",
            "date": "mars 2022",
            "from": "hackerank",
            "lien": "https://www.hackerrank.com/certificates/iframe/9452f947fafb"
        },
        {
            "id": "9452f947fafb",
            "filter": "backEnd",
            "titre": "HTML CSS",
            "date": "mars 2022",
            "from": "hackerank",
            "lien": "https://www.hackerrank.com/certificates/iframe/9452f947fafb"
        },
        {
            "id": "9452f947fafb",
            "filter": "backEnd",
            "titre": "HTML CSS",
            "date": "mars 2022",
            "from": "hackerank",
            "lien": "https://www.hackerrank.com/certificates/iframe/9452f947fafb"
        },
        {
            "id": "9452f947fafb",
            "filter": "backEnd",
            "titre": "HTML CSS",
            "date": "mars 2022",
            "from": "hackerank",
            "lien": "https://www.hackerrank.com/certificates/iframe/9452f947fafb"
        },

    ]


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

                    {
                        certificats.map((item) =>

                            <article className="certificat" >
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
                            </article>

                        )}
                </div>
            </div>
        </section>
    )
}

export default Certificat
