import React from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <section id="projects">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </section>
    );
};

export default Projects;