import Image from "next/image";

export const ProjectCard = () => {
    return (
        <div>
            <Image
                src="/typescript.svg"
                width={64}
                height={64}
                alt="typescript"
            />
        </div>
    );
};
