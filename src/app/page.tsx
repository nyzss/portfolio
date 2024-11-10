import { Linkedin, Github } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center w-full space-y-6 p-4 select-none">
            <h1 className="text-5xl sm:text-7xl font-bold intro__text  drop-shadow-xl">
                {"Hey! I'm "}
                <span className="bg-gradient-to-l dark:from-indigo-400 dark:to-teal-400 from-indigo-500 to-cyan-500 text-transparent bg-clip-text">
                    Okan Koca
                </span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {`I'm a full-stack developer studying at Ecole 42 in Paris. Passionate about crafting simple and elegant web experiences. I enjoy solving problems, working in teams, and always learning something new.`}
            </p>
            <p className="max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed ">
                You can check out my{" "}
                <a
                    href="/projects"
                    className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                    projects
                </a>
                {" or "}
                <a
                    href="/contact"
                    className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                    contact me.
                </a>
            </p>
            <div className="flex justify-center space-x-6 mt-4">
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
