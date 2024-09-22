"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Navigation items
const navItems = {
	"/": {
		name: "Accueil",
		ariaLabel: "Page accueil",
	},
	"/#massages": {
		name: "Massage",
		ariaLabel: "Section regroupant les massages",
	},
	"/shiatsu/traditionnel": {
		name: "Shiatsu",
		ariaLabel: "Page parlant du Shiatsu",
	},
	"/reiki": {
		name: "Reiki",
		ariaLabel: "Page expliquant le Reiki",
	},
	
};

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathName = usePathname();

	return (
		<header className="bg-black">
			<nav aria-label="Navigation principale" role="navigation" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				{/* Mobile menu button */}
				<div className="flex lg:hidden">
					<button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
				</div>

				{/* Desktop menu */}
				<div className="hidden lg:flex lg:gap-x-12">
					{Object.entries(navItems).map(([path, { name, ariaLabel }]) => {
						const isActive = pathName.startsWith(path);
						const textColor = isActive ? "text-white font-bold" : "text-gray-300 hover:text-white";
						return (
							<Link key={path} href={path} aria-label={ariaLabel || undefined} className={`text-sm font-semibold leading-6 ${textColor}`}>
								{name}
							</Link>
						);
					})}
				</div>
			</nav>

			{/* Mobile menu dialog */}
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full max-h-[500px] overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
					<div className="flex items-center justify-between">
						<button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-400">
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>

					{/* Mobile menu items */}
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/25">
							<div className="space-y-2 py-6">
								{Object.entries(navItems).map(([path, { name, ariaLabel }]) => (
									<Link
										key={path}
										href={path}
										rel="noopener noreferrer"
										target="_blank"
										aria-label={ariaLabel || undefined}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
										onClick={() => setMobileMenuOpen(false)}>
										{name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
