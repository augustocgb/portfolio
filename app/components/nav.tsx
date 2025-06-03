"use client"
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

const navItems = {
  '/': { name: 'Home' },
  '/projects': { name: 'Projects' },
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm border-text-secondary/10">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-text-primary hover:text-accent transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
