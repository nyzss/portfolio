// import { TechCard } from "./project-card";
import Image from "next/image";
import { techs } from "./tech-list";

export const Technologies = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4">
            {techs.map((tech) => (
                <div
                    key={tech.name}
                    className="flex flex-1 gap-5 p-2.5 rounded-xl border border-border bg-background hover:bg-secondary hover:border-primary hover:border-opacity-30 transition-colors duration-200"
                >
                    <div className={`p-3 rounded-lg w-fit ${tech.hue}`}>
                        <Image
                            alt={`${tech.name} logo`}
                            loading="lazy"
                            width="40"
                            height="40"
                            src={tech.icon}
                            className={`size-8 ${
                                tech.name === "Next.js" ? "dark:invert" : ""
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
    );
};
