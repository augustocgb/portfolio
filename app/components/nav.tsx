"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { clsx } from 'clsx'

const navItems = {
  '/': { 
    name: 'Home',
    icon: "🏠",
  },
  '/projects': { 
    name: 'Projects',
    icon: "💼",
  },
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[--bg-primary]/80 backdrop-blur-md border-b border-[--border]">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 md:gap-2">
            {Object.entries(navItems).map(([path, { name, icon }]) => {
              const isActive = pathname === path
              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    "flex items-center px-4 py-2 rounded-lg transition-all duration-200",
                    isActive 
                      ? "bg-[--bg-secondary] text-[--text-primary] font-medium" 
                      : "text-[--text-secondary] hover:text-[--text-primary] hover:bg-[--bg-secondary]/50"
                  )}
                >
                  <span className="text-xl mr-2">{icon}</span>
                  <span>{name}</span>
                </Link>
              )
            })}
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded bg-[--bg-secondary] border border-[--border] text-xs text-[--text-secondary] font-mono">
                <span>⌘</span>
                <span>K</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}