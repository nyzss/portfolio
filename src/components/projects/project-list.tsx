import React from "react";
import { ProjectCard } from "./project-card";
import { projects } from "./projects";
// import { ProjectCard } from "./project-card";

export const ProjectList = () => {
    return (
        <section id="projects" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">Projects</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
