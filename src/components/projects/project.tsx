/* eslint-disable @next/next/no-img-element */
import { Project } from "@/app/projects/projects";

export const SingleProject = ({ project }: { project: Project }) => {
    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.name} />
            <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                Github
            </a>
            {project.liveUrl && <a href={project.liveUrl}>Live</a>}
        </div>
    );
};
