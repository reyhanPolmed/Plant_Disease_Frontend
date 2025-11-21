"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Tab = {
  id: string
  label: string
  content: React.ReactNode
}

export function DetailTabs({ tabs, className }: { tabs: Tab[]; className?: string }) {
  const [active, setActive] = React.useState(tabs[0]?.id)

  return (
    <div className={cn("w-full", className)}>
      <div className="top-0 z-10 -mx-4 border-b bg-background/80 px-4 backdrop-blur">
        <div role="tablist" aria-label="Detail Penyakit" className="flex gap-2 overflow-x-auto py-2">
          {tabs.map((t) => {
            const isActive = t.id === active
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.id)}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent",
                )}
              >
                {t.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="pt-4">
        {tabs.map((t) => (
          <section
            key={t.id}
            role="tabpanel"
            hidden={t.id !== active}
            className="animate-in fade-in slide-in-from-bottom-2 duration-200"
          >
            {t.content}
          </section>
        ))}
      </div>
    </div>
  )
}
