export interface Tech {
    name: string;
    icon: string;
    hue: string;
    description?: string;
}

export const techs: Tech[] = [
    {
        name: "TypeScript",
        icon: "/svg/typescript.svg",
        hue: "bg-[#3178C6]/20",
        description: "JavaScript but better",
    },
    {
        name: "React",
        icon: "/svg/react.svg",
        hue: "bg-[#61DAFB]/20",
        description: "JavaScript Library",
    },
    {
        name: "Next.js",
        icon: "/svg/nextjs.svg",
        hue: "bg-[#ffffff]/20",
        description: "React framework",
    },
    {
        name: "Tailwind",
        icon: "/svg/tailwind.svg",
        hue: "bg-[#0EA5E9]/20",
        // description: "CSS framework",
    },
    {
        name: "Node.js",
        icon: "/svg/nodejs.svg",
        hue: "bg-[#68A063]/20",
        description: "Backend JavaScript",
    },
    {
        name: "Git",
        icon: "/svg/git.svg",
        hue: "bg-[#F1502F]/20",
        description: "Version control",
    },
    {
        name: "PostgreSQL",
        icon: "/svg/postgresql.svg",
        hue: "bg-[#336791]/20",
        description: "Relational database",
    },
    {
        name: "MongoDB",
        icon: "/svg/mongodb.svg",
        hue: "bg-[#13AA52]/20",
        // description: "NoSQL database",
    },
    {
        name: "Docker",
        icon: "/svg/docker.svg",
        hue: "bg-[#2496ED]/20",
        description: "Containerization",
    },
    {
        name: "Rust",
        icon: "/svg/rust.svg",
        hue: "bg-[#ffcfa1]/40",
        description: "Backend programming",
    },
    {
        name: "Python",
        icon: "/svg/python.svg",
        hue: "bg-[#3776ab]/20",
    },
    {
        name: "Django",
        icon: "/svg/django.svg",
        hue: "bg-[#2b956c]/20",
    },
    {
        name: "C",
        icon: "/svg/c.svg",
        hue: "bg-[#A8B9CC]/20",
    },
    {
        name: "C++",
        icon: "/svg/cpp.svg",
        hue: "bg-[#00599C]/20",
    },
];
