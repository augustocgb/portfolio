"use client"
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },  
  '/projects': {
    name: 'Projects',
  },
}

export function Navbar() {
  return (    
  <aside className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur mb-16 tracking-tight">
      <div className="max-w-4xl mx-4 lg:mx-auto">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
