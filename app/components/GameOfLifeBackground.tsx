"use client";

import React, { useRef, useEffect, useState } from 'react';

const CELL_SIZE = 24; // px (increased for much larger cells)
const ALIVE_COLOR = 'rgb(73, 73, 73)';
const DEAD_COLOR = 'rgba(0,0,0,0)';
const TICK_MS = 180;

function randomGrid(width: number, height: number): number[][] {
  const grid: number[][] = [];
  for (let y = 0; y < height; y++) {
    const row: number[] = [];
    for (let x = 0; x < width; x++) {
      row.push(Math.random() > 0.7 ? 1 : 0);
    }
    grid.push(row);
  }
  return grid;
}

function nextGrid(grid: number[][], width: number, height: number): number[][] {
  const newGrid: number[][] = [];
  for (let y = 0; y < height; y++) {
    const row: number[] = [];
    for (let x = 0; x < width; x++) {
      let neighbors = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          const ny = y + dy;
          const nx = x + dx;
          if (ny >= 0 && ny < height && nx >= 0 && nx < width) {
            neighbors += grid[ny][nx];
          }
        }
      }
      if (grid[y][x]) {
        row.push(neighbors === 2 || neighbors === 3 ? 1 : 0);
      } else {
        row.push(neighbors === 3 ? 1 : 0);
      }
    }
    newGrid.push(row);
  }
  return newGrid;
}

const GameOfLifeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, gridW: 0, gridH: 0 });
  const gridRef = useRef<number[][]>([]);

  // Handle resizing
  useEffect(() => {
    function updateDimensions() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const gridW = Math.ceil(w / CELL_SIZE);
      const gridH = Math.ceil(h / CELL_SIZE);
      setDimensions({ width: gridW * CELL_SIZE, height: gridH * CELL_SIZE, gridW, gridH });
    }
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize grid on mount or resize
  useEffect(() => {
    if (dimensions.gridW && dimensions.gridH) {
      gridRef.current = randomGrid(dimensions.gridW, dimensions.gridH);
    }
  }, [dimensions.gridW, dimensions.gridH]);

  // Animation loop
  useEffect(() => {
    if (!dimensions.gridW || !dimensions.gridH) return;
    let animationId: number;
    let running = true;
    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const grid = gridRef.current;
      for (let y = 0; y < dimensions.gridH; y++) {
        for (let x = 0; x < dimensions.gridW; x++) {
          ctx.fillStyle = grid[y][x] ? ALIVE_COLOR : DEAD_COLOR;
          ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
      }
    };
    const tick = () => {
      gridRef.current = nextGrid(gridRef.current, dimensions.gridW, dimensions.gridH);
      draw();
      if (running) {
        animationId = window.setTimeout(tick, TICK_MS);
      }
    };
    draw();
    animationId = window.setTimeout(tick, TICK_MS);
    return () => {
      running = false;
      window.clearTimeout(animationId);
    };
  }, [dimensions.gridW, dimensions.gridH]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.18,
        background: 'transparent',
      }}
      aria-hidden="true"
    />
  );
};

export default GameOfLifeBackground;
