/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const ItemPortfolio = (props) => {
  return (
    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={props.img} alt="" />
        </div>
        <h3>{props.title}</h3>
        <div className="portfolio__item-cta">
            <a href={props.git} className="btn" target="_blank">Github</a>
            <a href={props.demo} className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
    </article>
  )
}

export default ItemPortfolio