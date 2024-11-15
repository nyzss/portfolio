import { projects } from "@/components/projects/projects";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { readdir } from "fs/promises";
import path from "path";
import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

export const ProjectView = async ({
    params,
}: {
    params: Promise<{ project: string }>;
}) => {
    const project = (await params).project;

    const currentProject = projects.find(
        (p) => p.title.toLowerCase() === project.toLowerCase()
    );
    if (!currentProject) {
        return (
            <div className="flex flex-col w-full h-screen justify-center items-center">
                <h1 className="text-6xl font-bold">Project not found</h1>
                <Link
                    href="/projects"
                    className="text-teal-600 underline hover:text-teal-500 text-xl font-medium mt-4"
                >
                    Back to projects
                </Link>
            </div>
        );
    }
    const testPath = path.resolve(
        process.cwd(),
        "public",
        "projects/transcendence"
    );
    const files = await readdir(testPath);
    console.log(files);

    return (
        <div className="container mx-auto sm:py-44 flex h-screen flex-col items-center">
            <Link
                href="/projects"
                className="self-start text-xl text-teal-400 hover:text-teal-500 hover:underline"
            >
                Go back to projects
            </Link>
            <h1 className="self-start my-4 text-5xl font-bold">
                {project.charAt(0).toUpperCase() + project.slice(1)}
            </h1>
            <div>
                <Carousel className="">
                    <CarouselContent>
                        {files.map((value, index) => (
                            <CarouselItem key={index}>
                                <div className="flex items-center justify-center">
                                    <Image
                                        width={1280}
                                        height={720}
                                        src={`/projects/transcendence/${value}`}
                                        alt="project image"
                                        className="aspect-video"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default ProjectView;
