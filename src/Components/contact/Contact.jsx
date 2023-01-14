import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { RiUserFollowLine } from 'react-icons/ri'
import { FiSend } from 'react-icons/fi'
import data from '../../data/data.json'
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const notify = () => toast.success('Le message a été envoyé', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  const rs = data.contact;
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
    notify();
  };
  return (
    <section id="contact">
      <h5>Ne manquez pas cette occasion de me contacter</h5>
      <h2>Contacter Moi</h2>
      {/* <button className='btn' onClick={notify}>hhhhh</button> */}
      <div className="container container_contact">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>{rs.email}</h5>
            <a href={"mailto:" + rs.email} target="_blank" className='contact_a'>Send message <FiSend /></a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>{rs.tel}</h5>
            <a href={"https://wa.me/" + rs.whatsapp} target="_blank" className='contact_a'>Send message <FiSend /></a>
          </article>
          <article className="contact_option">
            <AiOutlineInstagram className='contact_option-icon' />
            <h4>Instagram</h4>
            <h5>{rs.instagram}</h5>
            <a href={"https://www.instagram.com/" + rs.instagram} target="_blank" className='contact_a'>Follow me <RiUserFollowLine /></a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='nom' placeholder='votre nom' required />
          <input type="email" name='email' placeholder='votre email' required />
          <textarea name="message" rows="7" placeholder='Votre Message' required></textarea>
          <div className='envoyer'>
            <button type='submit' className="btn btn-primary" >Envoyer</button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
