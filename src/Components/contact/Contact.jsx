import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import {RiUserFollowLine } from 'react-icons/ri'
import {FiSend } from 'react-icons/fi'
import {AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai'
const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c06655j', 'template_yniiv5o', form.current, 'LKvBSb1l4zGQbi4Yy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>hi</h5>
      <h2>Contacter moi</h2>
      <div className="container container_contact">
        <div className="contact_options">
        <article className="contact_option">
          <AiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>hamzamaach56@gmail.com</h5>
          <a href="mailto:hamzamaach56@gmail.com" target="_blank" className='contact_a'>Send message <FiSend/></a>
        </article>
        <article className="contact_option">
          <AiOutlineWhatsApp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+212 766-935013</h5>
          <a href="https://wa.me/+212766935013" target="_blank" className='contact_a'>Send message <FiSend/></a>
        </article>
        <article className="contact_option">
          <AiOutlineInstagram className='contact_option-icon'/>
          <h4>Instagram</h4>
          <h5>hamza_maax</h5>
          <a href="https://www.instagram.com/hamza_maax/" target="_blank" className='contact_a'>Follow me <RiUserFollowLine/></a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='nom' placeholder='votre nom' required />
          <input type="email" name='email' placeholder='votre email' required />
          <textarea name="message" rows="7" placeholder='Votre Message' required></textarea>
          <div className='envoyer'>
          <button type='submit' className="btn btn-primary" >Envoyer</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
