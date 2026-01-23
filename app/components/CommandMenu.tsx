"use client"

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { FaSearch, FaHome, FaBriefcase, FaMoon, FaSun, FaEnvelope, FaMagic, FaTimes } from 'react-icons/fa'
import { useTheme } from './ThemeProvider'

interface Action {
  id: string
  label: string
  icon: React.ReactNode
  perform: () => void
}

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const inputRef = useRef<HTMLInputElement>(null)

  // Toggle open/close with Ctrl+K or Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setSelectedIndex(0)
    }
  }, [open])

  const actions: Action[] = [
    {
      id: 'home',
      label: 'Go to Home',
      icon: <FaHome />,
      perform: () => router.push('/'),
    },
    {
      id: 'projects',
      label: 'Go to Projects',
      icon: <FaBriefcase />,
      perform: () => router.push('/projects'),
    },
    {
      id: 'theme',
      label: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      icon: theme === 'dark' ? <FaSun /> : <FaMoon />,
      perform: () => toggleTheme(),
    },
    {
      id: 'contact',
      label: 'Contact Me',
      icon: <FaEnvelope />,
      perform: () => {
        router.push('/#contact')
        // Small delay to allow navigation before scrolling
        setTimeout(() => {
            const el = document.getElementById('contact')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      },
    },
    {
      id: 'joke',
      label: 'Tell me a Joke',
      icon: <FaMagic />,
      perform: () => {
        const jokes = [
          "Why do programmers prefer dark mode? Because light attracts bugs.",
          "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
          "I walked into a bar and ordered 1 root beer. The bartender poured it into a square glass.",
          "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'"
        ];
        alert(jokes[Math.floor(Math.random() * jokes.length)])
      },
    },
  ]

  // Filter actions
  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase())
  )

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((i) => (i + 1) % filteredActions.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((i) => (i - 1 + filteredActions.length) % filteredActions.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].perform()
        setOpen(false)
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setOpen(false)}>
      <div 
        className="w-full max-w-lg bg-[--bg-primary] border border-[--border] rounded-xl shadow-2xl overflow-hidden animate-fade-up ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-[--border] px-4">
          <FaSearch className="w-5 h-5 text-[--text-secondary]" />
          <input
            ref={inputRef}
            className="flex-1 px-4 py-4 bg-transparent text-[--text-primary] placeholder-[--text-secondary] outline-none"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => {
                setQuery(e.target.value)
                setSelectedIndex(0)
            }}
            onKeyDown={handleKeyDown}
          />
          <button onClick={() => setOpen(false)} className="text-[--text-secondary] hover:text-[--text-primary]">
            <FaTimes />
          </button>
        </div>
        
        <div className="max-h-[300px] overflow-y-auto py-2">
          {filteredActions.length === 0 ? (
            <div className="px-4 py-8 text-center text-[--text-secondary]">
              No results found.
            </div>
          ) : (
            filteredActions.map((action, index) => (
              <button
                key={action.id}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                  index === selectedIndex
                    ? 'bg-[--accent] text-white'
                    : 'text-[--text-primary] hover:bg-[--bg-secondary]'
                }`}
                onClick={() => {
                  action.perform()
                  setOpen(false)
                }}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <span className={`text-lg ${index === selectedIndex ? 'text-white' : 'text-[--text-secondary]'}`}>
                    {action.icon}
                </span>
                <span className="font-medium">{action.label}</span>
              </button>
            ))
          )}
        </div>
        
        <div className="px-4 py-2 bg-[--bg-secondary] border-t border-[--border] text-xs text-[--text-secondary] flex justify-between">
            <span>Navigation</span>
            <div className="flex gap-2">
                <span className="bg-[--bg-primary] border border-[--border] px-1 rounded">↵</span>
                <span>to select</span>
                <span className="bg-[--bg-primary] border border-[--border] px-1 rounded">↑↓</span>
                <span>to navigate</span>
                <span className="bg-[--bg-primary] border border-[--border] px-1 rounded">esc</span>
                <span>to close</span>
            </div>
        </div>
      </div>
    </div>
  )
}
