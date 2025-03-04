import React from "react";

const Projects = () => {
    return (
        <main className="main-content">
            <section id="projects">
                <div className="projects-grid">
                    <div className="project-card">
                        <img
                            src="./images/projects/People-and-Vehicle-Detection.png"
                            alt="DetectVehuman (Detect Vehicle and Human)"
                            className="project-image"
                        />
                        <div className="project-info">
                            <h3 className="project-title">Detect Vehicle and Human</h3>
                            <p className="project-about">
                                DetectVehuman is a real-time vehicle detection system using YOLOv4-Tiny.
                            </p>
                            <div className="project-technologies">
                                <span className="tech-badge">
                                    <i className="fab fa-python"></i> Python
                                </span>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://github.com/onurmertanarat/DetectVehuman"
                                    target="_blank"
                                    className="project-link github"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                                <a
                                    href="https://medium.com"
                                    target="_blank"
                                    className="project-link medium"
                                >
                                    <i className="fab fa-medium"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src="./images/projects/2023_Turkish_Presidential_Elections.png"
                            alt="2023 Turkish Presidential Elections"
                            className="project-image"
                        />
                        <div className="project-info">
                            <h3 className="project-title">2023 Turkish Presidential Elections</h3>
                            <p className="project-about">
                                Parliament scenes were coded front end with Vizrt and back end with
                                VBScript.
                            </p>
                            <div className="project-technologies">
                                <span className="tech-badge">
                                    <i className="fas fa-terminal"></i> VBScript
                                </span>
                                <span className="tech-badge">
                                    <i className="fas fa-database"></i> MSSQL
                                </span>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://github.com/onurmertanarat/secim-2023"
                                    target="_blank"
                                    className="project-link github"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                                <a
                                    href="https://medium.com"
                                    target="_blank"
                                    className="project-link medium"
                                >
                                    <i className="fab fa-medium"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src="./images/projects/Image_Processing_Color_Detection.jpg"
                            alt="Image Processing-Color Detection"
                            className="project-image"
                        />
                        <div className="project-info">
                            <h3 className="project-title">Image Processing-Color Detection</h3>
                            <p className="project-about">
                                Color detection was coded with C#. Hardware control of the axes was
                                coded with Arduino.
                            </p>
                            <div className="project-technologies">
                                <span className="tech-badge">
                                    <i className="fab fa-python"></i> Python
                                </span>
                                <span className="tech-badge">
                                    <i className="fab fa-microsoft"></i> .NET
                                </span>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://github.com/onurmertanarat/imageProcessingProjects1_2_CSharp"
                                    target="_blank"
                                    className="project-link github"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                                <a
                                    href="https://medium.com"
                                    target="_blank"
                                    className="project-link medium"
                                >
                                    <i className="fab fa-medium"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Projects;
