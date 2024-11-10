import { Linkedin, Github } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-start w-full max-w-screen-xl mx-auto space-y-6 p-4 select-none font-normal">
            <h1 className="text-5xl sm:text-7xl font-bold drop-shadow-xl text-left">
                {"Hey! I'm "}
                <span className="bg-gradient-to-l dark:from-indigo-400 dark:to-teal-400 from-indigo-500 to-cyan-500 text-transparent bg-clip-text">
                    Okan Koca
                </span>
            </h1>
            <p className="w-full max-w-6xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                {`I'm a full-stack developer studying at Ecole 42 in Paris, with a passion for backend systems and infrastructure. I love tackling ambitious projects and solving complex problems, especially those I've never encountered before. Fast-moving environments energize me, and I'm always eager to learn and grow.`}
            </p>
            <p className="w-full max-w-4xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                You can check out my{" "}
                <a
                    href="/projects"
                    className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
                >
                    PROJECTS
                </a>
                {" or "}
                <a
                    href="/contact"
                    className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
                >
                    CONTACT ME.
                </a>
            </p>
            <div className="flex justify-start space-x-6 mt-4">
                <a
                    href="https://www.linkedin.com/in/okankoca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                    <Linkedin size={28} />
                </a>
                <a
                    href="https://github.com/nyzss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                    <Github size={28} />
                </a>
            </div>
        </div>
    );
}
