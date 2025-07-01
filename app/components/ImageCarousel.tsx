"use client"
import { useState } from "react"
import Image from "next/image"
import { createPortal } from "react-dom"

interface CarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  className?: string
  style?: React.CSSProperties
}

export function ImageCarousel({ images, className, style }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!images || images.length === 0) return null

  function prev() {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  }
  function next() {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
  }

  // Lightbox modal
  const modal = (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      style={{ animation: "fadeIn 0.2s" }}
      onClick={() => setLightboxOpen(false)}
    >
      {/* Left arrow */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-white hover:text-black z-[1010]"
          aria-label="Previous"
          type="button"
        >
          <svg width="36" height="36" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        </button>
      )}
      <div
        className="relative flex h-[80vh] w-[80vw] max-h-[80vh] max-w-[80vw] items-center justify-center"
      >
        <button
          onClick={e => { e.stopPropagation(); setLightboxOpen(false); }}
          className="absolute top-2 right-2 rounded-full cursor-pointer bg-black/70 p-1 text-white transition-colors hover:bg-white/20 hover:text-red-500"
          aria-label="Close"
          style={{ zIndex: 10 }}
          type="button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <div className="relative h-full w-full">
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="rounded-lg object-contain shadow-2xl"
            style={{ objectFit: "contain" }}
            sizes="80vw"
            priority
          />
        </div>
      </div>
      {/* Right arrow */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-white hover:text-black z-[1010]"
          aria-label="Next"
          type="button"
        >
          <svg width="36" height="36" viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        </button>
      )}
    </div>
  )

  return (
    <div className={`group relative ${className ?? ""}`} style={style}>
      <div className="relative w-full aspect-[3/2]">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="cursor-pointer rounded-lg object-cover transition-transform duration-200"
          style={{ display: 'block' }}
          onClick={() => setLightboxOpen(true)}
          sizes="(max-width: 768px) 100vw, 600px"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-2 text-white opacity-0 transition hover:bg-black/80 group-hover:opacity-100"
              aria-label="Previous"
              type="button"
              tabIndex={-1}
            >
              <svg width="28" height="28" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" fill="none" stroke="white" strokeWidth="2"/></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-2 text-white opacity-0 transition hover:bg-black/80 group-hover:opacity-100"
              aria-label="Next"
              type="button"
              tabIndex={-1}
            >
              <svg width="28" height="28" viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" fill="none" stroke="white" strokeWidth="2"/></svg>
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
              {images.map((img, idx) => (
                <button
                  key={img.src}
                  className={`h-2 w-2 rounded-full ${idx === current ? "bg-white" : "bg-white/40"} transition`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to image ${idx + 1}`}
                  type="button"
                  tabIndex={-1}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {lightboxOpen ? createPortal(modal, document.body) : null}
    </div>
  )
}