import { ProjectList } from "@/components/projects/project-list";
import { Technologies } from "@/components/main/technologies";
import { ProfileLinks } from "@/components/projects/profile-links";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <section className="flex flex-col justify-center w-full min-h-screen max-w-screen-xl mx-auto space-y-4 p-4 select-none font-normal">
                <h1 className="text-5xl sm:text-7xl font-bold drop-shadow-xl text-left">
                    {"Hey! I'm "}
                    <span className="bg-gradient-to-l dark:from-indigo-400 dark:to-teal-400 from-indigo-500 to-cyan-500 text-transparent bg-clip-text">
                        Okan Koca
                    </span>
                </h1>
                <p className="w-full max-w-6xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                    📍 Paris, France
                </p>

                <p className="w-full max-w-6xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                    I{"’"}m a{" "}
                    <span className="font-bold"> Full-Stack Developer</span>{" "}
                    from
                    <a
                        href="https://en.wikipedia.org/wiki/42_(school)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
                    >
                        {" Ecole 42 "}
                    </a>
                    in Paris, eager to take on new projects and adapt to any
                    challenge to create solid, effective solutions.
                </p>
                <p className="w-full max-w-4xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                    You can check out my{" "}
                    <Link
                        href="/projects"
                        className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
                    >
                        PROJECTS
                    </Link>
                    {"."}
                </p>
                <ProfileLinks />
            </section>

            <div className="flex items-center justify-center w-full select-none">
                <div className="w-4/6 h-4/6">
                    <h1 className="text-4xl font-bold mb-3">
                        Current technologies
                    </h1>
                    <p className="mb-5 text-primary text-opacity-80">
                        I{"'"}m experienced with tools and frameworks that help
                        me create reliable and effective applications.
                    </p>
                    <Technologies />
                </div>
            </div>

            <section className="w-full my-40 p-4">
                <ProjectList />
            </section>
        </div>
    );
}
