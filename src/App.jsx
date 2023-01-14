import React from 'react'
import Header from './Components/header/Header'
import Competence from './Components/competence/Competence'
import Formation from './Components/formation/Formation'
import Projects from './Components/projects/Projects'
import Experience from './Components/experience/Experience'
import Interet from './Components/interet/Interet'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Certificat from './Components/certificat/Certificat'

const App = () => {
  const dAPI = 'https://pieberkane.live/data/data.json'
  const API = 'https://mocki.io/v1/7678d628-4e7e-4a50-88e7-6737b19b7d3e'
  return (
    <>
      <Header />
      <Competence />
      <Formation />
      <Projects />
      <Certificat />
      {/* <Experience/> */}
      <Interet />
      <Contact />
      <Footer />
    </>
  )
}

export default App
