"use client"
import { useRef, useEffect, useState } from 'react'
import { useTheme } from './ThemeProvider'

const CELL_SIZE = 24
const TICK_MS = 180

function randomGrid(width: number, height: number): number[][] {
  return Array(height).fill(0).map(() => 
    Array(width).fill(0).map(() => Math.random() > 0.85 ? 1 : 0)
  )
}

function nextGrid(grid: number[][], width: number, height: number): number[][] {
  return grid.map((row, y) => 
    row.map((cell, x) => {
      let neighbors = 0
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue
          const ny = y + dy, nx = x + dx
          if (ny >= 0 && ny < height && nx >= 0 && nx < width) {
            neighbors += grid[ny][nx]
          }
        }
      }
      return neighbors === 3 || (cell === 1 && neighbors === 2) ? 1 : 0
    })
  )
}

export default function GameOfLifeBackground() {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, gridW: 0, gridH: 0 })
  const gridRef = useRef<number[][]>([])

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth, h = window.innerHeight
      const gridW = Math.ceil(w / CELL_SIZE), gridH = Math.ceil(h / CELL_SIZE)
      setDimensions({ width: gridW * CELL_SIZE, height: gridH * CELL_SIZE, gridW, gridH })
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (dimensions.gridW && dimensions.gridH) {
      gridRef.current = randomGrid(dimensions.gridW, dimensions.gridH)
    }
  }, [dimensions.gridW, dimensions.gridH])

  useEffect(() => {
    if (!dimensions.gridW || !dimensions.gridH) return
    let running = true

    const draw = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const computedStyle = getComputedStyle(document.documentElement)
      const bgPrimary = computedStyle.getPropertyValue('--cell-dead').trim()
      const textSecondary = computedStyle.getPropertyValue('--cell-alive').trim()

      ctx.canvas.width = dimensions.width
      ctx.canvas.height = dimensions.height
      
      ctx.fillStyle = bgPrimary
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const grid = gridRef.current
      ctx.fillStyle = textSecondary
      for (let y = 0; y < dimensions.gridH; y++) {
        for (let x = 0; x < dimensions.gridW; x++) {
          if (grid[y][x] === 1) {
            ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE - 1, CELL_SIZE - 1)
          }
        }
      }
    }

    const tick = () => {
      if (!running) return
      gridRef.current = nextGrid(gridRef.current, dimensions.gridW, dimensions.gridH)
      draw()
      setTimeout(tick, TICK_MS)
    }

    draw()
    tick()
    return () => { running = false }
  }, [dimensions.gridW, dimensions.gridH, theme]) // Re-run effect when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-screen h-screen"
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
        transition: 'background-color var(--transition)'
      }}
      aria-hidden="true"
    />
  )
}
