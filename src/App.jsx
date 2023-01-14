import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Competence from './Components/competence/Competence'
import Formation from './Components/formation/Formation'
import Projects from './Components/projects/Projects'
import Experience from './Components/experience/Experience'
import Interet from './Components/interet/Interet'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Certificat from './Components/certificat/Certificat'
import Profil from './Components/header/Profil'


const App = () => {
  return (
    <>
      {/* <Profil /> */}
      <Header />    
      {/* <Nav /> */}
      <Competence/>
      <Formation />
      <Projects/>
      <Certificat/>
      {/* <Experience/> */}
      <Interet/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
