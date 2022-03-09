import React from 'react'
import './services.css'
import { Design, Web, Content } from './ItemService'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <Design />
        </article> 
        <article className="service">
          <Web />
        </article>  
        <article className="service">
          <Content />
        </article>   
      </div>
    </section>
  )
}

export default Services