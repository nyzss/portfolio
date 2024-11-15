export interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const randomSeed = () => Math.round(Math.random() * 1000000).toString();

const randomAvatar = () =>
    `https://api.dicebear.com/9.x/glass/svg?seed=${randomSeed()}`;

export const projects: ProjectCardProps[] = [
    {
        title: "Transcendence",
        description:
            "Final project of 42's common core, creating a multiplayer Pong platform. Built with vanilla JavaScript for the frontend, Django and REST framework for the backend, and containerized with Docker for consistent deployment.",
        imageUrl: "/projects/transcendence/3.png",
        link: "/projects/transcendence",
        technologies: [
            "JavaScript",
            "Bootstrap",
            "Django",
            "Python",
            "Chart.js",
            "Git",
            "Nginx",
        ],
        githubUrl: "https://github.com/nyzss/transcendence",
    },
    {
        title: "Webserv",
        description:
            "Creating a basic HTTP server. Built with C++ and containerized with Docker for consistent deployment.",
        imageUrl: randomAvatar(),
        link: "/projects/webserv",
        technologies: ["C++", "JavaScript", "Python", "Git"],
        githubUrl: "https://github.com/nyzss/webserv",
    },
];
