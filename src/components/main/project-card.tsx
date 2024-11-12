import Image from "next/image";
import { Tech } from "./tech-list";

export const TechCard = ({ tech }: { tech: Tech }) => {
    return (
        <div
            className={`flex items-center w-64 h-20 bg-zinc-900 bg-opacity-50 backdrop-blur-xl shadow-lg rounded-sm overflow-hidden`}
        >
            <div
                className={`w-2/5 h-full flex justify-center items-center bg-opacity-50 backdrop-blur-2xl ${tech.hue}`}
            >
                <Image
                    src={tech.icon}
                    width={48}
                    height={48}
                    alt="TypeScript"
                />
            </div>
            <div className="w-2/3 flex justify-center items-center">
                <h1 className="text-lg font-semibold text-primary">
                    {tech.name}
                </h1>
            </div>
        </div>
    );
};
