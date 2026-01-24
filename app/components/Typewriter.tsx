"use client"

import { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  className?: string;
}

export default function Typewriter({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delay = 2000,
  className = "" 
}: TypewriterProps) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const currentWord = words[wordIndex]
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1))
      } else {
        setText(currentWord.substring(0, text.length + 1))
      }

      // Logic for switching states
      if (!isDeleting && text === currentWord) {
        // Finished typing, wait before deleting
        setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && text === '') {
        // Finished deleting, move to next word
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }

    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay])

  return (
    <span className={`${className} inline-flex items-center`}>
      {text}
      <span className="ml-1 w-[3px] h-[1em] bg-[--accent] animate-pulse" />
    </span>
  )
}
