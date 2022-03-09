import React from 'react'
import './experience.css'
import ExpDetail from './ExpDetail'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExpDetail title="HTML" text="Experienced"/>
            <ExpDetail title="CSS" text="Intermediate"/>
            <ExpDetail title="JavaScript" text="Experienced"/>
            <ExpDetail title="Bootstrap" text="Experienced"/>
            <ExpDetail title="Tailwind" text="Intermediate"/>
            <ExpDetail title="React" text="Experienced"/>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExpDetail title="Node JS" text="Experienced"/>
            <ExpDetail title="MongoDB" text="Basic"/>
            <ExpDetail title="Java" text="Experienced"/>
            <ExpDetail title="MySQL" text="Experienced"/>
            <ExpDetail title="PHP" text="Intermediate"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience