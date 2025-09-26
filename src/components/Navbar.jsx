import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articles" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Articles
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;