import { TechCard } from "./project-card";
import { techs } from "./tech-list";

export const Technologies = () => {
    return (
        <div className="flex flex-col space-y-5">
            <h1 className="font-medium text-3xl ">Current technologies:</h1>
            <div className="grid grid-flow-col gap-4">
                {techs.map((tech) => (
                    <TechCard tech={tech} key={tech.name} />
                ))}
            </div>
        </div>
    );
};
