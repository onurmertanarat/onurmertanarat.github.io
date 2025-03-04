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
                    <p>
                        I started my coding journey in high school with C++ and VB.NET,
                        scripting for games. Over time, I expanded my expertise to C#, Python,
                        and Linux, diving into system automation and backend development.
                        Currently, I focus on C# and Node.js while experimenting with Docker and
                        cloud technologies to build scalable and efficient solutions.
                    </p>
                </div>
                <div className="download-cv">
                    <a
                        href="./assets/Onur_Mert_Anarat_EN.pdf"
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
