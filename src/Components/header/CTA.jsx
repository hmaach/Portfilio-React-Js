import React from 'react'
import CV from '../../assets/Hamza_Maach.pdf'
import data from '../../data/data.json'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn btn-primary'>Télécharger mon CV</a>
      <a href='#contact' className='btn'>contact</a>
    </div>
  )
}

export default CTA
