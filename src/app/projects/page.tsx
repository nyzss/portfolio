import { SingleProject } from "@/components/projects/project";
import { projects } from "./projects";

const Project = () => {
    return (
        <div className="container max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-12">
                My Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <SingleProject key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};
export default Project;
