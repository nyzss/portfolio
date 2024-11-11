export interface Tech {
    name: string;
    icon: string;
    hue: string;
}

export const techs: Tech[] = [
    {
        name: "TypeScript",
        icon: "/svg/typescript.svg",
        // hue: "bg-gradient-to-r from-blue-500/40 to-blue-500/60",
        hue: "bg-blue-500",
    },
    {
        name: "React",
        icon: "/svg/react.svg",
        // hue: "bg-gradient-to-r from-blue-500/40 to-blue-500/60",
        hue: "bg-blue-400",
    },
    {
        name: "Next.js",
        icon: "/svg/nextjs.svg",
        // hue: "bg-gradient-to-r from-zinc-500/40 to-zinc-500/60",
        hue: "bg-zinc-300",
    },
    {
        name: "Tailwind",
        icon: "/svg/tailwind.svg",
        // hue: "bg-gradient-to-r from-blue-500/40 to-transparent",
        hue: "bg-cyan-500",
    },
    {
        name: "Node.js",
        icon: "/svg/nodejs.svg",
        // hue: "bg-gradient-to-r from-green-500/40 to-transparent",
        hue: "bg-green-500",
    },
    {
        name: "Git",
        icon: "/svg/git.svg",
        // hue: "bg-gradient-to-r from-red-500/40 to-transparent",
        hue: "bg-red-500",
    },
];
