import { Github, Linkedin } from "lucide-react";
import { ResumeViewer } from "./resume-viewer";

export const ProfileLinks = () => {
    return (
        <div className="flex items-center space-x-6 mt-4">
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
            <ResumeViewer />
        </div>
    );
};
