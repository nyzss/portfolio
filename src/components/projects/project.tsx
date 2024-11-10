/* eslint-disable @next/next/no-img-element */
import { Project } from "@/app/projects/projects";

export const SingleProject = ({ project }: { project: Project }) => {
    return (
        <div className="relative group overflow-hidden rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 h-96 drop-shadow-xl">
            <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 drop-shadow-xl"
            />

            <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 drop-shadow-xl">
                <h2 className="text-xl font-bold text-primary mb-2">
                    {project.name}
                </h2>
                <p className="text-primary text-opacity-80 mb-4">
                    {project.description}
                </p>
                <div className="flex space-x-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-400 font-medium hover:underline"
                        >
                            Github
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-400 font-medium hover:underline"
                        >
                            Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
