"use client"
import { useState, useRef, useEffect } from "react"
import Image, { ImageProps } from "next/image"
import { createPortal } from "react-dom"

interface LightboxImageProps extends Omit<ImageProps, "ref"> {
  src: string
  alt: string
}

export function LightboxImage(props: LightboxImageProps) {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === modalRef.current) setOpen(false)
  }

  // Modal content to be rendered in portal
  const modal = (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      style={{ animation: "fadeIn 0.2s" }}
    >
      <div className="relative w-[80vw] h-[80vh] max-w-[80vw] max-h-[80vh] flex items-center justify-center">
        <button
          onClick={() => setOpen(false)}
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
            {...props}
            fill
            // Remove width and height props if present
            width={undefined}
            height={undefined}
            className={
              ((props.className ?? "") + " object-contain rounded-lg shadow-2xl").trim()
            }
            style={{ objectFit: "contain" }}
            sizes="80vw"
          />
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        <Image {...props} />
      </div>
      {mounted && open && typeof window !== "undefined"
        ? createPortal(modal, document.body)
        : null}
    </>
  )
}
