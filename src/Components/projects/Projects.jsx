import React from 'react'
import Project from '../../assets/project.jpg'
import data from '../../data/data.json'
import './projects.css'

const Projects = () => {

  const projects = data.project
  return (
    <section id="projects">
      <h5>Comment pratiquer mon savoir-faire ?</h5>
      <h2>Mes Projets</h2>
      <div className="container project_container">
        {projects.map((project, index) =>
          <article className="project_item" key={index}>
            <div className="project_item-image">
              <img src={project.image} alt="project" />
            </div>
            <h3>{project.titre}</h3>
            <span>Outils : 
              {project.outils.map((item, index2) =>
                <p key={index2}> {index2 !== (project.outils.length) && item.concat(' ,')} </p>
              )}
            </span>
            <h6>{project.description}</h6>
            <div className="project_item-cta">
              {project.github && <a href={project.github} className="btn" target='_blank'>Github</a>}
              {project.demo && <a href={project.demo} className="btn btn-primary" target='_blank'>Demo</a>}
            </div>
          </article>
        )}

      </div>
    </section>
  )
}

export default Projects
