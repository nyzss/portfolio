"use client";

import { Github, Linkedin, Mail, X } from "lucide-react";
import { ResumeViewer } from "./resume-viewer";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";

export const ProfileLinks = () => {
    const { toast } = useToast();

    return (
        <div className="flex items-center space-x-6 mt-4">
            <a
                href="https://www.linkedin.com/in/okankoca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
                <Linkedin size={28} />
            </a>
            <a
                href="https://github.com/nyzss"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
                <Github size={28} />
            </a>
            <Button
                onClick={() => {
                    navigator.clipboard.writeText("oknakoca@gmail.com");
                    toast({
                        title: "Copied email successfully!",
                        description: "oknakoca@gmail.com",
                        action: (
                            <ToastAction altText="Close">
                                <X />
                            </ToastAction>
                        ),
                    });
                }}
            >
                <Mail size={28} />
            </Button>
            <ResumeViewer />
        </div>
    );
};
