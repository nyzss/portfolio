export interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
}

const randomSeed = () => Math.round(Math.random() * 1000000).toString();

const randomAvatar = () =>
    `https://api.dicebear.com/9.x/glass/svg?seed=${randomSeed()}`;

export const projects: Project[] = [
    {
        id: 1,
        name: "Transcendence",
        description:
            "Last project of 42 common core, the goal was to build a website that would allow users to play a multiplayer Pong game.",
        imageUrl: randomAvatar(),
        githubUrl: "https://github.com/nyzss/transcendence",
    },
    {
        id: 2,
        name: "Webserv",
        description:
            "Third project of 42 common core, the goal was to build a basic HTTP server.",
        imageUrl: randomAvatar(),
        githubUrl: "https://github.com/nyzss/webserv",
    },
    {
        id: 3,
        name: "placeholder",
        description: "placeholder",
        imageUrl: randomAvatar(),
        githubUrl: "",
    },
    {
        id: 4,
        name: "placeholder",
        description: "placeholder",
        imageUrl: randomAvatar(),
    },
    {
        id: 5,
        name: "placeholder",
        description: "placeholder",
        imageUrl: randomAvatar(),
    },
    {
        id: 6,
        name: "placeholder",
        description: "placeholder",
        imageUrl: randomAvatar(),
    },
    {
        id: 7,
        name: "placeholder",
        description: "placeholder",
        imageUrl: randomAvatar(),
    },
    {
        id: 8,
        name: "placeholder",
        description: "placeholder",
        imageUrl: randomAvatar(),
    },
    {
        id: 9,
        name: "placeholder",
        description: "placeholder",
        imageUrl: randomAvatar(),
    },
    {
        id: 10,
        name: "placeholder",
        description: "placeholder",
        imageUrl: randomAvatar(),
    },
];
