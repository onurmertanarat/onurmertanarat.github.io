import React from 'react';
import { Link } from 'react-router-dom';
import { skillsData } from '../data/skillsData';

const Home = () => {
    return (
        <section id="about">
            <div className="profile-container">
                <img
                    src="/images/profile.png"
                    alt="Profile Picture"
                    className="profile-pic"
                />
            </div>
            <div className="profile-info">
                <h2 className="profile-name">Onur Mert Anarat</h2>
                <p className="profile-title">Software Engineer</p>
            </div>
            <div className="about-text">
                <h3>About Me</h3>
                <p>I am a software engineer with a background in Mechatronics Engineering, specializing in backend development and systems engineering. I build high-performance, scalable solutions using C#, Python, ASP.NET Core, and modern architectures. I enjoy bridging software engineering with modern DevOps practices to deliver reliable, maintainable, and production-ready systems.</p>
            </div>
            <div className="home-actions">
                <a
                    href="/assets/CV_OnurMertAnarat_EN.pdf"
                    download
                    className="button-secondary"
                >
                    Download CV
                </a>
                <Link to="/projects" className="button-secondary">
                    View My Projects
                </Link>
            </div>
            <div className="skills">
                <h3>Core Abilities</h3>
                <div className="skills-container">
                    {skillsData.map((skill) => (
                        <div className="skill-item" key={skill.id}>
                            <i className={skill.iconClass}></i> {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;