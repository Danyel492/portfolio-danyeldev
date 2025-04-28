import React, { useEffect } from "react";
import Project from "../components/Project.jsx";
import './projects.css'

export const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="projects-container">
            <h2>Projetos</h2>
            <Project />
        </div>
    );
};