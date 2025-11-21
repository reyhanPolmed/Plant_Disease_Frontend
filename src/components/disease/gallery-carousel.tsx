"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
// import cabai from "../../assets/cabai.png"
// type ImgItem = {
//   src: string
//   alt: string
//   caption?: string
// }

export function GalleryCarousel({
  items,
  className,
}: {
  items: string
  className?: string
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [index, setIndex] = React.useState(0)

  const go = (dir: number) => {
    setIndex((i) => (i + dir + items.length) % items.length)
  }

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  if (!items?.length) return null
  console.log("gambar: " + items)
  return (
    <section className={cn("rounded-xl border bg-card", className)}>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
        <img
          src={items}
          alt="gambar penyakit tanaman"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <button
          aria-label="Sebelumnya"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur hover:bg-background"
        >
          <span className="sr-only">Sebelumnya</span>
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-foreground">
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          aria-label="Berikutnya"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur hover:bg-background"
        >
          <span className="sr-only">Berikutnya</span>
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-foreground">
            <path fill="currentColor" d="M10 6l-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
        {/* {items[index]?.caption ? (
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent px-4 py-3 text-sm text-foreground">
            {items[index].caption}
          </figcaption>
        ) : null} */}
      </div>

      {/* <div className="flex items-center justify-center gap-2 p-3">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              i === index ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
            )}
          />
        ))}
      </div> */}
    </section>
  )
}
