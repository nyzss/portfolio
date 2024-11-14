// ShowcaseCard.tsx
import Image from "next/image";
import React from "react";

export interface ProjectCardProps {
    title?: string;
    description?: string;
    imageUrl?: string;
    link?: string;
    technologies?: string[];
}

export const ProjectCard = ({
    title = "Project Alpha",
    description = "Project Alpha is an innovative solution that redefines user engagement and experience...",
    imageUrl = "/projects/placeholder.png",
    link = "/showcase/project-alpha",
    technologies = [
        "Figma",
        "WordPress",
        "PHP",
        "JavaScript",
        "Tailwind",
        "Git",
    ],
}: ProjectCardProps) => {
    return (
        <div className="group">
            <a href={link} className="block">
                <div className="flex flex-col">
                    <div className="relative mb-4 flex items-stretch p-2 rounded-xl group-hover:bg-zinc-800 group-hover:border-neutral-600 transition duration-200 ease-in-out">
                        <Image
                            alt={title}
                            loading="lazy"
                            width="500"
                            height="200"
                            decoding="async"
                            className="object-cover rounded-lg aspect-video grow"
                            src={imageUrl}
                            style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-end px-5 pb-7 tracking-tighter bg-black/80 group-hover:bg-black/90 rounded-xl transition duration-200 ease-in-out">
                            <h2 className="text-white text-xl sm:text-2xl font-semibold">
                                {title}
                            </h2>
                            <p className="text-sm md:text-base font-medium text-neutral-300 tabular-nums leading-normal">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="ml-2 text-primary text-opacity-70 tabular-nums leading-normal">
                        <ul className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <li
                                    key={index}
                                    className="after:content-[','] last:after:content-[''] text-xs md:text-sm"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    );
};
