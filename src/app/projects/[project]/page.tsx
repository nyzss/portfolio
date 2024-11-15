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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    // console.log(files);

    return (
        <div className="container mx-auto sm:py-12 flex h-screen flex-col items-center">
            <div className="w-full mx-auto max-w-7xl">
                <Link
                    href="/projects"
                    className="self-start text-xl text-teal-400 hover:text-teal-500 hover:underline"
                >
                    Go back to projects
                </Link>
                <h1 className="self-start my-4 text-5xl font-bold">
                    {project.charAt(0).toUpperCase() + project.slice(1)}
                </h1>
                <Carousel>
                    <CarouselContent>
                        {files.map((value, index) => (
                            <CarouselItem key={index}>
                                {/* <Card> */}
                                <div className="flex justify-center aspect-video items-center">
                                    <Image
                                        width={1280}
                                        height={720}
                                        src={`/projects/transcendence/${value}`}
                                        alt="project image"
                                        className="object-cover rounded-sm"
                                    />
                                </div>
                                {/* </Card> */}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <p className="text-2xl text-primary text-opacity-75 mt-6">
                    {currentProject.description}
                </p>
                <div className="flex space-x-4 select-none my-3 flex-wrap space-y-2">
                    {currentProject.technologies.map((tech) => (
                        <Badge key={tech} className="text-md">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectView;
