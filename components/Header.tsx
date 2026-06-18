"use client"

import { useState } from "react"
import { Circle, Waves } from "lucide-react"

export function Header() {
  const [showImage, setShowImage] = useState(true)

  return (
    <header className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 pb-8 pt-6 sm:px-8 lg:px-10 lg:pb-12">
      <nav className="flex items-center justify-between text-sm text-pearl-ink/70">
        <a
          href="#cards"
          className="flex items-center gap-2 rounded-full px-2 py-2 font-medium tracking-[0.18em] uppercase transition hover:text-pearl-ink focus:outline-none focus:ring-2 focus:ring-pearl-mauve/40"
        >
          <Circle className="h-4 w-4 fill-white/70 text-pearl-champagne" />
          Pearling
        </a>
        <span className="hidden items-center gap-2 sm:flex">
          <Waves className="h-4 w-4 text-pearl-ocean" />
          Daily reflection
        </span>
      </nav>

      <div className="grid items-center gap-8 lg:grid-cols-[1fr_360px]">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-pearl-mauve">
            A soft ritual for hope
          </p>
          <h1 className="font-serif text-5xl leading-[0.95] text-pearl-ink sm:text-6xl lg:text-7xl">
            Cards of the Day by Pearling
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-pearl-ink/72 sm:text-xl">
            Choose a card. Receive a gentle message, a meaningful lesson, and
            one question to carry with you today.
          </p>
        </div>

        <aside className="pearl-frame shadow-pearl mx-auto w-full max-w-[270px] overflow-hidden rounded-[28px] p-3 sm:max-w-[320px] lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-white/60">
            {showImage ? (
              <img
                // Replace this file at public/pearling-image.jpg to update the founder visual.
                src="/pearling-image.jpg"
                alt="Pearling portrait"
                className="h-full w-full object-cover grayscale-[0.25] contrast-[0.98] saturate-[0.92]"
                onError={() => setShowImage(false)}
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_42%_22%,rgba(255,255,255,0.9),transparent_28%),linear-gradient(145deg,#fffaf4,#ead7cb_48%,#dbe7e4)] px-8 text-center">
                <Circle className="h-12 w-12 fill-white/80 text-pearl-champagne" />
                <div>
                  <p className="font-serif text-3xl text-pearl-ink">
                    Created by Pearling
                  </p>
                  <p className="mt-3 text-sm leading-6 text-pearl-ink/62">
                    A soft visual signature belongs here.
                  </p>
                </div>
              </div>
            )}
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/84 px-3 py-3 text-center shadow-card backdrop-blur sm:px-4">
              <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.12em] text-pearl-ink/72 sm:text-xs sm:tracking-[0.18em]">
                Created by Pearling
              </p>
            </div>
          </div>
        </aside>
      </div>
    </header>
  )
}
