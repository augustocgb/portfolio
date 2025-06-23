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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-3 hover:bg-black/80 transition z-[1010]"
          aria-label="Previous"
          style={{}}
        >
          <svg width="36" height="36" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" fill="none" stroke="white" strokeWidth="2"/></svg>
        </button>
      )}
      <div
        className="relative w-[80vw] h-[80vh] max-w-[80vw] max-h-[80vh] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={() => setLightboxOpen(false)}
          className="absolute -top-4 -right-4 bg-black/70 text-white rounded-full p-1 hover:bg-black/90 transition"
          aria-label="Close"
          style={{ zIndex: 10 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" />
            <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" />
          </svg>
        </button>
        <div className="relative w-full h-full">
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="object-contain rounded-lg shadow-2xl"
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
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-3 hover:bg-black/80 transition z-[1010]"
          aria-label="Next"
          style={{}}
        >
          <svg width="36" height="36" viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" fill="none" stroke="white" strokeWidth="2"/></svg>
        </button>
      )}
    </div>
  )

  return (
    <div className={`relative group ${className ?? ""}`} style={style}>
      <div className="relative w-full aspect-[3/2]">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-cover rounded-lg transition-transform duration-200 cursor-pointer"
          style={{ display: 'block' }}
          onClick={() => setLightboxOpen(true)}
          sizes="(max-width: 768px) 100vw, 600px"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition"
              aria-label="Previous"
              type="button"
              tabIndex={-1}
            >
              <svg width="28" height="28" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" fill="none" stroke="white" strokeWidth="2"/></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition"
              aria-label="Next"
              type="button"
              tabIndex={-1}
            >
              <svg width="28" height="28" viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" fill="none" stroke="white" strokeWidth="2"/></svg>
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((img, idx) => (
                <button
                  key={img.src}
                  className={`w-2 h-2 rounded-full ${idx === current ? "bg-white" : "bg-white/40"} transition`}
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
