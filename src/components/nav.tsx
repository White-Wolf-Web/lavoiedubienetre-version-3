import Link from 'next/link';


interface NavProps  {
  name: React.ReactNode;  
  ariaLabel?: string;
}
const navItems: Record<string, NavProps> = {
  '/': {
    name: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home iconHome">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    ariaLabel: 'Home'  // Texte descriptif pour le lien
  },
  '/#massages': {
    name: 'Massage',
  },
  '/shiatsu/traditionnel': {
    name: 'Shiatsu',
  },
  '/reiki': {
    name: 'Reiki',
  },
  '#contact': {
    name: 'Contact',
  },
};

export function Navbar() {
  return (
    <nav className="flex flex-row m-auto items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative -ml-[8px] mb-7 tracking-tight" id="nav">
      <div className="flex flex-row space-x-0 pr-10">
      {Object.entries(navItems).map(([path, { name, ariaLabel }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
              aria-label={ariaLabel || undefined} 
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

