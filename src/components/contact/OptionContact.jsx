/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessageLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';


const MailContact = () => (
    <article className="contact__option">
        <MdOutlineEmail className="contact__option-icon"/>
        <h4>Email</h4>
        <h5>dummyegator@gmail.com</h5>
        <a href="mailto:dummyegator@gmail.com" target="_blank">Send a message</a>
    </article>
)

const MessageContact = () => (
    <article className="contact__option">
        <RiMessageLine className="contact__option-icon"/>
        <h4>Message</h4>
        <h5>egator</h5>
        <a href="https://m.me/ernet.achiever" target="_blank">Send a message</a>
    </article>
)

const WhatsappContact = () => (
    <article className="contact__option">
        <BsWhatsapp className="contact__option-icon"/>
        <h4>WhatsApp</h4>
        <h5>+123456789</h5>
        <a href="https://api.whatsapp.com" target="_blank">Send a message</a>
    </article>
)

const OptionContact = () => {
  return (
    <>
        <MailContact />
        <MessageContact />
        <WhatsappContact />
    </>
  )
}
export default OptionContact