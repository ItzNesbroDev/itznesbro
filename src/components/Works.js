import React from 'react'
import '../styles/Works.css'
import { AiOutlineCode } from 'react-icons/ai'
import { projects } from '../data'

const Works = () => {
  return (
    <div className="works">
      <div className="works__container">
        <div className="works__container__title">
          <AiOutlineCode style={{
            fontSize: '2rem',
            marginTop: '1rem',
          }} />
          <h1>Apps I've Built</h1>
        </div>
        {projects.map((project) => {
          return (
            <div className="works__container__projects">
              <a
                href={project.link}
                key={project.image}
                className="works__link"
              >
                <img
                  src={project.image}
                  alt="image"
                  className="works__image"
                />
              </a>
              <h3 className="works__title">{project.title}</h3>
              <p className="works__description">{project.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Works
