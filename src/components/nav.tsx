"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
	name: React.ReactNode;
	ariaLabel?: string;
}
const navItems: Record<string, NavProps> = {
	"/": {
		name: "Accueil",
		ariaLabel: "Page accueil",
	},
	"/#massages": {
		name: "Massage",
	},
	"/shiatsu/traditionnel": {
		name: "Shiatsu",
	},
	"/reiki": {
		name: "Reiki",
	},
	"#contact": {
		name: "Contact",
	},
};

export function Navbar() {
	const pathName = usePathname();

	return (
		<nav className="flex flex-row m-auto items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative -ml-[8px] mb-7 tracking-tight" id="nav">
			<div className="flex flex-row space-x-0 pr-10 ml-3">
				{Object.entries(navItems).map(([path, { name, ariaLabel }]) => {
					const isActive = pathName.startsWith(path);
          const textColor = isActive ? "text-neutral-900 font-bold" : "text-neutral-800";
          const classes = `transition-all hover:${textColor} dark:hover:text-neutral-200 flex align-left relative py-1 px-2`;

					return (
						<Link
							key={path}
							href={path}
							className={classes}
							aria-label={ariaLabel || undefined}>
							{name}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
