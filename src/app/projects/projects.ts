export interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        name: "Transcendence",
        description:
            "Last project of 42 common core, the goal was to build a website that would allow users to play a multiplayer Pong game.",
        imageUrl: "https://via.placeholder.com/150",
        githubUrl: "https://github.com/nyzss/transcendence",
    },
    {
        id: 2,
        name: "Webserv",
        description:
            "Third project of 42 common core, the goal was to build a basic HTTP server.",
        imageUrl: "https://via.placeholder.com/150",
        githubUrl: "https://github.com/nyzss/webserv",
    },
    {
        id: 3,
        name: "placeholder",
        description: "placeholder",
        imageUrl: "https://via.placeholder.com/150",
        githubUrl: "",
    },
    {
        id: 4,
        name: "placeholder",
        description: "placeholder",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        name: "placeholder",
        description: "placeholder",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        name: "placeholder",
        description: "placeholder",
        imageUrl: "https://via.placeholder.com/",
    },
    {
        id: 7,
        name: "placeholder",
        description: "placeholder",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 8,
        name: "placeholder",
        description: "placeholder",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 9,
        name: "placeholder",
        description: "placeholder",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 10,
        name: "placeholder",
        description: "placeholder",
        imageUrl: "https://via.placeholder",
    },
];
