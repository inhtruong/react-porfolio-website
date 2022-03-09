import React from 'react'
import './contact.css'
import OptionContact from './OptionContact'
import FormContact from './FormContact'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <OptionContact />
        </div>

        <FormContact />
      </div>
    </section>
  )
}

export default Contact