import { Linkedin, Github } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen space-y-6 p-4 ">
            <h1
                className="text-5xl sm:text-7xl font-bold intro__text select-none"
                style={{ opacity: 1, transform: "none" }}
            >
                <mark
                    className="mark bg-gradient-to-l from-indigo-600 to-teal-500
                 text-white px-2 py-1 rounded-md"
                >
                    Hey ! I'm Okan Koca
                </mark>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed select-none">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas animi odio, numquam excepturi iste laborum saepe.{" "}
                <a
                    href="/projects"
                    className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                    Check out my projects
                </a>
                .
            </p>
            <p className="max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed select-none">
                When I'm not coding, you can find me writing my{" "}
                <a
                    href="/blog"
                    className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                    blog
                </a>{" "}
                Feel free to{" "}
                <a
                    href="/contact"
                    className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                    contact me
                </a>
                .
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
