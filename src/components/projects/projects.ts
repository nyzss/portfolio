export interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
}

// const randomSeed = () => Math.round(Math.random() * 1000000).toString();

// const randomAvatar = () =>
//     `https://api.dicebear.com/9.x/glass/svg?seed=${randomSeed()}`;

export const projects: ProjectCardProps[] = [
    {
        title: "Transcendence",
        description:
            "Transcendence is a real-time multiplayer Pong game with user authentication, live chat, and a leaderboard system. Built as the final project of the 42 common core curriculum, it demonstrates mastery of full-stack development, real-time systems, and user management.",
        imageUrl: "/projects/transcendence/1.png",
        link: "/projects/transcendence",
        technologies: [
            "JavaScript",
            "Bootstrap",
            "Django",
            "Python",
            "Chart.js",
            "Git",
            "Nginx",
            "Redis",
        ],
        githubUrl: "https://github.com/nyzss/transcendence",
    },
    {
        title: "Webserver",
        description:
            "WebServer is an HTTP/1.1 server implemented from scratch in C++98, designed to handle HTTP requests, responses, and dynamic content generation through CGI scripts. Concepts include socket programming, multiplexing, and HTTP protocol.",
        imageUrl: "/projects/webserver/2.png",
        link: "/projects/webserver",
        technologies: ["C++", "Docker", "Git", "Unit-Testing", "HURL"],
        githubUrl: "https://github.com/nyzss/webserver",
    },
];
