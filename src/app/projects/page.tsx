import { SingleProject } from "@/components/projects/project";
import { projects } from "./projects";

const Project = () => {
    return (
        <div className="flex justify-center items-center w-full text-center">
            {projects.map((project) => (
                <SingleProject key={project.id} project={project} />
            ))}
        </div>
    );
};
export default Project;
