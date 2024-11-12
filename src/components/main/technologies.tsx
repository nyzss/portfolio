// import { TechCard } from "./project-card";
import Image from "next/image";
import { techs } from "./tech-list";

export const Technologies = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center justify-between gap-4 mb-8">
                {techs
                    .filter((tech) => tech.description)
                    .map((tech) => (
                        <div
                            key={tech.name}
                            className="flex flex-1 gap-5 p-2.5 rounded-sm border border-border bg-background hover:bg-secondary hover:bg-opacity-90 hover:border-primary hover:border-opacity-20 transition-colors duration-200"
                        >
                            <div className={`p-3 rounded-sm w-fit ${tech.hue}`}>
                                <Image
                                    alt={`${tech.name} logo`}
                                    loading="lazy"
                                    width="40"
                                    height="40"
                                    src={tech.icon}
                                    className={`size-8 ${
                                        tech.name === "Next.js"
                                            ? "dark:invert"
                                            : ""
                                    }`}
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-primary">
                                    {tech.name}
                                </h4>
                                <p className="text-dark-200/70 dark:text-white/70 text-sm">
                                    {tech.description}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>

            <h3 className="text-md mb-3 text-primary text-opacity-80">
                Additional technologies I use
            </h3>
            <div className="flex flex-wrap gap-4">
                {techs
                    .filter((tech) => !tech.description)
                    .map((tech) => (
                        <div
                            key={tech.name}
                            className={`flex items-center gap-2 p-1.5 rounded-sm border border-border w-fit bg-background`}
                        >
                            <div className={`p-1.5 rounded-sm ${tech.hue}`}>
                                <Image
                                    alt={`${tech.name} logo`}
                                    loading="lazy"
                                    width="24"
                                    height="24"
                                    src={tech.icon}
                                    className="size-6"
                                />
                            </div>
                            <span className="text-sm text-primary">
                                {tech.name}
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    );
};
