"use client"
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

const navItems = {
  '/': { 
    name: 'Home',
    icon: (
      <svg
        className="inline-block mr-2 transition-colors duration-200"
        width="22"
        height="22"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 9.5L10 4L17 9.5V16A1 1 0 0 1 16 17H4A1 1 0 0 1 3 16V9.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 17V11H12V17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  '/projects': { 
    name: 'Projects',
    icon: (
      <svg
        className="inline-block mr-2 transition-colors duration-200"
        width="22"
        height="22"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="7"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 7V5A3 3 0 0 1 13 5V7"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[--bg-primary]/80 backdrop-blur-sm border-b border-[--text-secondary]/20">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-6">
            {Object.entries(navItems).map(([path, { name, icon }]) => (
                <Link
                key={path}
                href={path}
                className="transition-colors duration-200 flex items-center text-[--text-primary] hover:text-[--text-secondary]"
                >
                <span className="flex items-center transition-colors duration-200">{icon}</span>
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
