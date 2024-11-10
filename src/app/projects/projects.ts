export interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
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
];
