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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
        <div className="container mx-auto px-4 py-8">
            <div className="w-full mx-auto max-w-5xl">
                <Link
                    href="/projects"
                    className="self-start text-xl text-teal-400 hover:text-teal-500 hover:underline"
                >
                    Go back to projects
                </Link>
                <h1 className="text-3xl font-bold mb-6">
                    {currentProject.title}
                </h1>
            </div>

            <Carousel
                className="w-full max-w-5xl mx-auto mb-8"
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {files.map((value, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="flex aspect-video items-center justify-center p-1">
                                    <Image
                                        src={`/projects/transcendence/${value}`}
                                        alt={`Project image ${index + 1}`}
                                        width={1920}
                                        height={1080}
                                        className="rounded-lg object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:block" />
                <CarouselNext className="hidden sm:block" />
            </Carousel>

            <div className="max-w-5xl mx-auto">
                <p className="text-lg mb-6">{currentProject.description}</p>

                <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectView;
