import React from 'react'
import Project from '../../assets/project.jpg'
import './projects.css'

const Projects = () => {
  return (
<section id="projects">
    <h5>my work</h5>
    <h2>Projects</h2>
    <div className="container project_container">
        <article className="project_item">
            <div className="project_item-image">
                <img src={Project} alt="project" />
            </div>
            <h3>this is project</h3>
            <div className="project_item-cta">
            <a href="#" className="btn" target='_blank'>Github</a>
            <a href="#" className="btn btn-primary" target='_blank'>Demo</a>
            </div>
        </article>
        <article className="project_item">
            <div className="project_item-image">
                <img src={Project} alt="project" />
            </div>
            <h3>this is project</h3>
            <div className="project_item-cta">
            <a href="#" className="btn" target='_blank'>Github</a>
            <a href="#" className="btn btn-primary" target='_blank'>Demo</a>
            </div>
        </article>
        <article className="project_item">
            <div className="project_item-image">
                <img src={Project} alt="project" />
            </div>
            <h3>this is project</h3>
            <div className="project_item-cta">
            <a href="#" className="btn" target='_blank'>Github</a>
            <a href="#" className="btn btn-primary" target='_blank'>Demo</a>
            </div>
        </article>
        <article className="project_item">
            <div className="project_item-image">
                <img src={Project} alt="project" />
            </div>
            <h3>this is project</h3>
            <div className="project_item-cta">
            <a href="#" className="btn" target='_blank'>Github</a>
            <a href="#" className="btn btn-primary" target='_blank'>Demo</a>
            </div>
        </article>
        <article className="project_item">
            <div className="project_item-image">
                <img src={Project} alt="project" />
            </div>
            <h3>this is project</h3>
            <div className="project_item-cta">
            <a href="#" className="btn" target='_blank'>Github</a>
            <a href="#" className="btn btn-primary" target='_blank'>Demo</a>
            </div>
        </article>
        <article className="project_item">
            <div className="project_item-image">
                <img src={Project} alt="project" />
            </div>
            <h3>this is project</h3>
            <div className="project_item-cta">
            <a href="#" className="btn" target='_blank'>Github</a>
            <a href="#" className="btn btn-primary" target='_blank'>Demo</a>
            </div>
        </article>
    </div>
</section>
  )
}

export default Projects
