"use client"
import { useState } from "react"
import Image from "next/image"
import { createPortal } from "react-dom"
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

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
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setLightboxOpen(false)}
    >
      {/* Left arrow */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 z-[1010]"
          aria-label="Previous"
          type="button"
        >
          <FaChevronLeft className="w-8 h-8" />
        </button>
      )}
      <div
        className="relative flex h-[85vh] w-[85vw] max-h-[85vh] max-w-[85vw] items-center justify-center"
      >
        <button
          onClick={e => { e.stopPropagation(); setLightboxOpen(false); }}
          className="absolute -top-12 right-0 rounded-full cursor-pointer p-2 text-white/70 transition-colors hover:text-white"
          aria-label="Close"
          style={{ zIndex: 10 }}
          type="button"
        >
          <FaTimes className="w-8 h-8" />
        </button>
        <div className="relative h-full w-full">
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="rounded-lg object-contain"
            style={{ objectFit: "contain" }}
            sizes="90vw"
            priority
          />
        </div>
      </div>
      {/* Right arrow */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 z-[1010]"
          aria-label="Next"
          type="button"
        >
          <FaChevronRight className="w-8 h-8" />
        </button>
      )}
    </div>
  )

  return (
    <div className={`group relative ${className ?? ""}`} style={style}>
      <div className="relative w-full aspect-[16/9] bg-[--bg-secondary]">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="cursor-pointer object-cover transition-transform duration-200"
          style={{ display: 'block' }}
          onClick={() => setLightboxOpen(true)}
          sizes="(max-width: 768px) 100vw, 600px"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white opacity-0 transition hover:bg-black/70 group-hover:opacity-100"
              aria-label="Previous"
              type="button"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white opacity-0 transition hover:bg-black/70 group-hover:opacity-100"
              aria-label="Next"
              type="button"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 p-1 px-2 rounded-full bg-black/20 backdrop-blur-[2px]">
              {images.map((img, idx) => (
                <button
                  key={img.src}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${idx === current ? "bg-white w-3" : "bg-white/50"}`}
                  onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
                  aria-label={`Go to image ${idx + 1}`}
                  type="button"
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
