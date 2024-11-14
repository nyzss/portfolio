import Image from "next/image";
import { Github } from "lucide-react"; // Assuming you have a Github component
import { SquareArrowOutUpRight } from "lucide-react"; // Assuming you have a link icon component
import { TechTag } from "./tech-tag";
export const ProjectCard = () => {
    return (
        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                    <Image
                        alt="Random Project Title"
                        loading="lazy"
                        width="300"
                        height="200"
                        decoding="async"
                        className="rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                        src="/projects/placeholder.png"
                    />
                </div>
                <div className="md:w-2/3 text-left">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                        transcendence
                    </h3>
                    <ul className="space-y-2 text-gray-300 mb-4">
                        <li className="flex items-start">
                            <span className="mr-2 mt-1.5 text-gray-500">•</span>
                            <span>
                                built app with vanilla javascript, django with
                                python.
                            </span>
                        </li>
                    </ul>
                    <div className="flex flex-wrap select-none">
                        <TechTag>Next.js</TechTag>
                        <TechTag>Tailwind CSS</TechTag>
                        <TechTag>API Integration</TechTag>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <a
                            href="https://github.com/nyzss/transcendence"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-primary hover:text-white transition-colors duration-300"
                        >
                            <Github className="mr-2" />
                            <span>View Code</span>
                        </a>
                        <a
                            href="https://okankoca.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                            <SquareArrowOutUpRight className="mr-2" />
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
};
