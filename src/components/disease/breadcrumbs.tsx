"use client"

// import Link from "next/link"
import { cn } from "@/lib/utils"

type Crumb = {
  label: string
  href?: string
}

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <a className="hover:text-foreground underline-offset-4 hover:underline" href={item.href}>
                {item.label}
              </a>
            ) : (
              <span aria-current="page" className="text-foreground font-medium">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <span className="text-muted-foreground/70">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
