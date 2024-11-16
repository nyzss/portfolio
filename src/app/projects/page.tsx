import { ProjectList } from "@/components/projects/project-list";
import Link from "next/link";

const Project = () => {
    return (
        <div className="container max-w-7xl mx-auto py-12 px-4">
            <Link
                href="/"
                className="text-lg font-medium text-teal-500 hover:underline hover:text-teal-600"
            >
                Go back
            </Link>
            <ProjectList />
        </div>
    );
};
export default Project;
