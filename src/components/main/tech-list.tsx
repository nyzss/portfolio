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
        hue: "bg-dark-200/10 dark:bg-white/10",
        description: "React framework",
    },
    {
        name: "Tailwind",
        icon: "/svg/tailwind.svg",
        hue: "bg-[#0EA5E9]/20",
        description: "CSS framework",
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
];
