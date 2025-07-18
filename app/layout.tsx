"use client"
import './global.css'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import GameOfLifeBackground from './components/GameOfLifeBackground'
import { ThemeProvider } from './components/ThemeProvider'

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${GeistSans.variable} no-flash`} suppressHydrationWarning>
      <head>
        <title>Augusto Butkewitsch | Portfolio</title>
        <link rel="icon" href="/favicon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.classList.toggle('dark', prefersDark);
              })()
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <GameOfLifeBackground />
          <Navbar />
          <main className="max-w-4xl mx-auto px-4 py-8 flex-grow w-full">
            {children}
          </main>
            <Footer />
            <Analytics />
            <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
