/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import ItemPortfolio from './ItemPortfolio'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const portfolios = [
  {
    img: IMG1,
    title: 'Productivity Mobile App Exploration',
    git: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17668715-Productivity-Mobile-App-Exploration'
  },
  {
    img: IMG2,
    title: 'Smart Farming Web App design',
    git: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17669969-Smart-Farming-Web-App'
  },
  {
    img: IMG3,
    title: 'Real Estate Website design',
    git: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17669002-Real-Estate-Website-design'
  },
  {
    img: IMG4,
    title: 'Getsbi Seo Tools Website',
    git: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17666182-Getsbi-Seo-Tools-Website'
  },
  {
    img: IMG5,
    title: 'Social media post Flyer design Brand identity',
    git: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17669154-Social-media-post-Flyer-design-Brand-identity'
  },
  {
    img: IMG6,
    title: 'Property Design Property Design',
    git: 'https://github.com/',
    demo: 'https://dribbble.com/shots/17661647-Property-Design'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      
      <div className="portfolio__container container">
        {
          portfolios.map((portfolio, index) => (
            <ItemPortfolio 
              key={index}
              img={portfolio.img}
              title={portfolio.title}
              git={portfolio.git}
              demo={portfolio.demo}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio