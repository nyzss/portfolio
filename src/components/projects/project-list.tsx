import React from "react";
import { ProjectCard } from "./new-project-card";
import { projects } from "./projects";
// import { ProjectCard } from "./project-card";

export const ProjectList = () => {
    return (
        <section id="projects" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">Projects</h2>
            <ul className="space-y-12">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                    ></ProjectCard>
                ))}
            </ul>
        </section>
    );
};
