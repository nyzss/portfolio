// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectCardProps } from "./projects";

export const ProjectCard = ({
    project: { title, imageUrl, link, technologies },
}: {
    project: ProjectCardProps;
}) => {
    return (
        <div className="group">
            <Link href={link} className="block">
                <div className="flex flex-col text-left">
                    <div className="relative mb-4 flex items-stretch p-2 rounded-xl group-hover:bg-zinc-800 group-hover:border-neutral-600 transition duration-200 ease-in-out">
                        <img
                            alt={title}
                            loading="lazy"
                            width="500"
                            height="200"
                            decoding="async"
                            className="object-cover rounded-lg aspect-video grow"
                            src={imageUrl}
                            style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-end px-5 pb-7 tracking-tighter bg-black/45 group-hover:bg-black/0 rounded-xl transition duration-200 ease-in-out ">
                            <h2 className="text-white group-hover:text-black text-xl sm:text-2xl font-semibold">
                                {title}
                            </h2>
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
            </Link>
        </div>
    );
};
