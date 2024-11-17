import React from "react";
import { ProjectCard } from "./project-card";
import { projects } from "./projects";
// import { ProjectCard } from "./project-card";

export const ProjectList = () => {
    return (
        <section id="projects" className="mb-12 flex justify-center">
            <div className="w-full max-w-7xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-100">
                    Projects
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.title}>
                            <ProjectCard project={project}></ProjectCard>
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    );
};
