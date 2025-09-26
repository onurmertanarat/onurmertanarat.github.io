import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-about">{project.description}</p>
                <div className="project-technologies">
                    {project.technologies.map((tech) => (
                        <span className="tech-badge" key={tech}>{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                        <i className="fab fa-github"></i>
                    </a>
                    {project.articleLink && (
                        <a href={project.articleLink} target="_blank" rel="noopener noreferrer" className="project-link medium">
                            <i className="fab fa-medium"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;