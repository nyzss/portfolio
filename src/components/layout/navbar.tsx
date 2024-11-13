"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Bars3Icon,
    MoonIcon,
    SunIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { routes } from "./routes";

export const NavigationBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const [showBar, setShowBar] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        console.log(resolvedTheme);
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    const Toggle = () => {
        return (
            <div>
                <Button onClick={toggleTheme} variant={"outline"}>
                    {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
                </Button>
            </div>
        );
    };

    useEffect(() => {
        const checkSticky = () => {
            setShowBar(window.scrollY > scrollPosition);
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", checkSticky);

        return () => {
            window.removeEventListener("scroll", checkSticky);
        };
    }, [scrollPosition]);

    return (
        <nav
            className={`z-40 sticky top-2 mx-4 rounded-sm transition-all duration-300 ${
                showBar ? "-top-96" : ""
            } ${
                scrollPosition > 0
                    ? "bg-secondary bg-opacity-20 backdrop-filter backdrop-blur-sm "
                    : ""
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="flex items-cente">
                    <Link href="/" className="text-2xl font-bold">
                        Okan Koca
                    </Link>
                </div>
                <div className="hidden md:flex space-x-8">
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-5">
                            <NavigationMenuItem>
                                <Toggle />
                            </NavigationMenuItem>
                            {routes.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={link.href}
                                            className="text-primary dark:hover:text-gray-300 hover:text-gray-600"
                                        >
                                            {link.name}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                {/* menu toggle here */}
                <div className="md:hidden flex space-x-3">
                    <Toggle />
                    <Button
                        variant="ghost"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        {navbarOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>
            {/* menu items here */}
            {navbarOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col space-y-2 px-4 pb-4">
                        {routes.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-primary dark:hover:text-gray-300 hover:text-gray-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
