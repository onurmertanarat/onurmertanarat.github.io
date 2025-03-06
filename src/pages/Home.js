import React from "react";

const Home = () => {
    return (
        <main>
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
                    <p className="profile-title">Software Developer</p>
                </div>
                <div className="about-text">
                    <h3>About Me</h3>
                    <p>Hi! I'm a software developer with a background in mechatronics engineering. My journey started with C++ and VB.NET for game scripting, and over time, I specialized in backend development using Python, C#, and Node.js.</p>
                    <p>I have experience in Linux system administration, automation, and web application development with Django and ASP.NET Core. I’m also passionate about DevOps and cloud technologies like Docker. Currently, I’m focused on advancing my expertise in modern backend technologies and DevOps practices.</p>
                </div>
                <div className="download-cv">
                    <a
                        href="./assets/ONUR MERT ANARAT (EN).pdf"
                        download
                        className="cv-button"
                    >
                        Download CV
                    </a>
                </div>
                <div className="skills">
                    <h3>Abilities</h3>
                    <div className="skills-container">
                        <div className="skill-item">
                            <i className="fab fa-python"></i> Python
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-microsoft"></i> .NET
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-database"></i> SQL
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-html5"></i> HTML
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-css3-alt"></i> CSS
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-js"></i> JavaScript
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-terminal"></i> VBScript
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-linux"></i> Linux
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-docker"></i> Docker
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
