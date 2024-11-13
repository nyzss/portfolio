import React from "react";
import Image from "next/image";
import { Github } from "lucide-react"; // Assuming you have a Github component
import { SquareArrowOutUpRight } from "lucide-react"; // Assuming you have a link icon component

export const ProjectList = () => {
    return (
        <section id="projects" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">Projects</h2>
            <ul className="space-y-12">
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
                                src="/path/to/your/image.jpg"
                            />
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                                Random Project Title
                            </h3>
                            <ul className="space-y-2 text-gray-300 mb-4">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 text-gray-500">
                                        •
                                    </span>
                                    <span>
                                        Developed a comprehensive solution using
                                        Next.js and Tailwind CSS.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 text-gray-500">
                                        •
                                    </span>
                                    <span>
                                        Implemented responsive layouts, advanced
                                        animations, and dark mode support.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 text-gray-500">
                                        •
                                    </span>
                                    <span>
                                        Integrated with third-party APIs for
                                        enhanced functionality.
                                    </span>
                                </li>
                            </ul>
                            <div className="flex flex-wrap">
                                <span className="inline-block bg-green-500 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-500 mr-2 mb-2 rounded-full">
                                    Next.js
                                </span>
                                <span className="inline-block bg-green-500 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-500 mr-2 mb-2 rounded-full">
                                    Tailwind CSS
                                </span>
                                <span className="inline-block bg-green-500 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-500 mr-2 mb-2 rounded-full">
                                    API Integration
                                </span>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href="https://github.com/yourusername/random-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    <Github className="mr-2" />
                                    <span>View Code</span>
                                </a>
                                <a
                                    href="https://randomproject-demo.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    <SquareArrowOutUpRight className="mr-2" />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
};
