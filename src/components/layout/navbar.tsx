"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";

export const NavigationBar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<nav className="bg-white border-b border-gray-200">
			<div className="max-w-7xl mx-auto flex items-center justify-between p-4">
				<div className="flex items-center">
					<Link href="/" className="text-xl font-bold">
						MyLogo
					</Link>
				</div>
				<div className="hidden md:flex space-x-8">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href="/" passHref>
									<NavigationMenuLink className="text-gray-800 hover:text-gray-600">
										Home
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/projects" passHref>
									<NavigationMenuLink className="text-gray-800 hover:text-gray-600">
										Projects
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/contact" passHref>
									<NavigationMenuLink className="text-gray-800 hover:text-gray-600">
										Contact
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				{/* mobile open here */}
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
			{/* mobile */}
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
