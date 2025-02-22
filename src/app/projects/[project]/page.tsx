import { projects } from "@/projects";
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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, LucideExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ProjectView({
    params,
}: {
    params: Promise<{ project: string }>;
}) {
    const project = (await params).project.toLowerCase();

    const currentProject = projects.find(
        (p) => p.title.toLowerCase() === project
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
        `projects/${project}`
    );
    const files = await readdir(testPath);
    return (
        <div className="container mx-auto px-4 max-w-4xl my-12">
            <div className="w-full mx-auto mt-4">
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
                className="w-full mx-auto"
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
                                        src={`/projects/${project}/${value}`}
                                        alt={`Project image ${index + 1}`}
                                        width={1920}
                                        height={1080}
                                        className="aspect-video w-full rounded-lg object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>

            <div className="mx-auto mt-2">
                <div className="mb-3 flex gap-2">
                    {currentProject.githubUrl && (
                        <a
                            href={currentProject.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant={"outline"}>
                                <Github />
                            </Button>
                        </a>
                    )}
                    {currentProject.liveUrl && (
                        <a
                            href={currentProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant={"outline"}>
                                <LucideExternalLink />
                            </Button>
                        </a>
                    )}
                </div>
                <p className="flex-1 text-lg mb-3">
                    {currentProject.description}
                </p>

                <div className="flex flex-wrap gap-2 select-none">
                    {currentProject.technologies.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
