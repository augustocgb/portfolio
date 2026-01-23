"use client"

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { FaSearch, FaHome, FaBriefcase, FaMoon, FaSun, FaEnvelope, FaMagic, FaTimes, FaRulerCombined, FaCodeBranch, FaClock, FaWifi, FaGithub, FaPalette, FaLink, FaMapMarkedAlt } from 'react-icons/fa'
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
  const [rainbowMode, setRainbowMode] = useState(false)
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const inputRef = useRef<HTMLInputElement>(null)

  const [stats, setStats] = useState({
    time: '',
    width: 0,
    height: 0,
    scroll: 0,
    lastUpdate: 'Loading...',
    online: true
  })

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

      // Start System Monitor Logic when menu is open
      const updateStats = () => {
        const now = new Date()
        setStats(prev => ({
          ...prev,
          time: now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          width: window.innerWidth,
          height: window.innerHeight,
          online: navigator.onLine
        }))
      }

      // Fetch latest portfolio commit
      fetch('https://api.github.com/users/augustocgb/events/public')
        .then(res => res.json())
        .then(data => {
            const pushEvent = data.find((e: any) => e.type === 'PushEvent' && e.repo.name === 'augustocgb/portfolio')
            if (pushEvent) {
                const date = new Date(pushEvent.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
                setStats(prev => ({ ...prev, lastUpdate: date }))
            } else {
                setStats(prev => ({ ...prev, lastUpdate: 'Unknown' }))
            }
        })
        .catch(() => setStats(prev => ({ ...prev, lastUpdate: 'Error' })))

      const handleScroll = () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight
        const scrollProgress = scrollTotal > 0 ? Math.round((window.scrollY / scrollTotal) * 100) : 0
        setStats(prev => ({ ...prev, scroll: scrollProgress }))
      }

      const handleResize = () => {
          setStats(prev => ({ ...prev, width: window.innerWidth, height: window.innerHeight }))
      }

      const handleOnline = () => setStats(prev => ({ ...prev, online: true }))
      const handleOffline = () => setStats(prev => ({ ...prev, online: false }))

      const timer = setInterval(() => {
          setStats(prev => ({
              ...prev,
              time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
          }))
      }, 1000)

      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleResize)
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
      
      updateStats()
      handleScroll()

      return () => {
        clearInterval(timer)
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
      }
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
            className="flex-1 px-4 py-4 bg-transparent text-[--text-primary] placeholder-[--text-secondary] outline-none border-none ring-0 focus:ring-0"
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
        
        <div className="px-4 py-2 bg-[--bg-secondary] border-t border-[--border] text-xs text-[--text-primary] flex justify-between">
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
        
        {/* System Monitor Section */}
        <div className="px-4 py-3 bg-[--bg-primary] border-t border-[--border] text-[10px] text-[--text-primary] font-mono grid grid-cols-4 gap-2">
            <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1 opacity-80">
                    <FaRulerCombined className="w-2.5 h-2.5" />
                    <span>VIEWPORT</span>
                </div>
                <span>{stats.width}x{stats.height}</span>
            </div>
            <div className="flex flex-col gap-0.5">
                 <div className="flex items-center gap-1 opacity-80">
                    <span className="font-bold border border-current rounded-[2px] px-0.5 text-[8px] leading-none">SC</span>
                    <span>SCROLL</span>
                </div>
                <div className="flex items-center gap-1">
                    <span>{stats.scroll}%</span>
                    <div className="h-1 w-8 bg-[--bg-secondary] rounded-full overflow-hidden">
                        <div className="h-full bg-[--accent]" style={{ width: `${stats.scroll}%` }} />
                    </div>
                </div>
            </div>
            <div 
                className="flex flex-col gap-0.5 cursor-pointer hover:text-[--accent] transition-colors"
                onClick={() => window.open('https://github.com/augustocgb/portfolio', '_blank')}
                title="View Source on GitHub"
            >
                <div className="flex items-center gap-1 opacity-80">
                    <FaCodeBranch className="w-2.5 h-2.5" />
                    <span>LAST UPDATED</span>
                </div>
                <span>{stats.lastUpdate}</span>
            </div>
            <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1 opacity-80">
                    <FaClock className="w-2.5 h-2.5" />
                    <span>LOCAL</span>
                </div>
                <span>{stats.time}</span>
            </div>
        </div>

      </div>
    </div>
  )
}
