"use client";

import Link from "next/link";
import { useState } from "react";
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

export const NavigationBar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const { theme, setTheme, themes } = useTheme();

	const toggleTheme = () => {
		console.log("themes: ", themes);
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<nav className="bg-background border-b border-separate">
			<div className="max-w-7xl mx-auto flex items-center justify-between p-4">
				<div className="flex items-center">
					<Link href="/" className="text-xl font-bold">
						MyLogo
					</Link>
				</div>
				<div className="hidden md:flex space-x-8">
					<NavigationMenu>
						<NavigationMenuList className="space-x-5">
							<NavigationMenuItem>
								<Button onClick={toggleTheme}>
									{theme === "dark" ? (
										<MoonIcon />
									) : (
										<SunIcon />
									)}
								</Button>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/"
										className="text-primary dark:hover:text-gray-300 hover:text-gray-600"
									>
										Home
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/projects"
										className="text-primary dark:hover:text-gray-300 hover:text-gray-600"
									>
										Projects
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/contact"
										className="text-primary dark:hover:text-gray-300 hover:text-gray-600"
									>
										Contact
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				{/* Mobile menu toggle */}
				<div className="md:hidden">
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
			{/* Mobile menu items */}
			{navbarOpen && (
				<div className="md:hidden">
					<div className="flex flex-col space-y-2 px-4 pb-4">
						<Link
							href="/"
							className="text-gray-800 hover:text-gray-600"
						>
							Home
						</Link>
						<Link
							href="/projects"
							className="text-gray-800 hover:text-gray-600"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="text-gray-800 hover:text-gray-600"
						>
							Contact
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};
