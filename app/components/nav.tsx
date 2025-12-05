"use client"
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

const navItems = {
  '/': { 
    name: ' Home',
    icon: ( "🏠 " ),
  },
  '/projects': { 
    name: ' Projects',
    icon: ( "💼 " ),
  },
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[--bg-primary]/80 backdrop-blur-sm border-b border-[--text-secondary]/20">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-8">
            {Object.entries(navItems).map(([path, { name, icon }]) => (
                <Link
                key={path}
                href={path}
                className="transition-colors duration-200 flex items-center text-[--text-primary] hover:text-[--text-secondary]"
                >
                <span className="flex items-center transition-colors duration-200 text-2xl mr-2">{icon}</span>
                <span className="transition-colors duration-200">{name}</span>
                </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
