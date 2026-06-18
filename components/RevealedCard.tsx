"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Copy, Download, RefreshCw } from "lucide-react"
import type { ReflectionCard } from "@/types/card"

interface RevealedCardProps {
  card: ReflectionCard
  onChooseAgain: () => void
}

function formatReflection(card: ReflectionCard) {
  return [
    "Cards of the Day by Pearling",
    "",
    card.title,
    "",
    "Empowering Message:",
    card.message,
    "",
    "Insightful Lesson:",
    card.lesson,
    "",
    "Reflective Question:",
    card.question,
    "",
    "Sweet Words:",
    card.sweetWords,
    "",
    "Take what feels useful. Leave what does not."
  ].join("\n")
}

export function RevealedCard({ card, onChooseAgain }: RevealedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState("")

  useEffect(() => {
    dialogRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onChooseAgain()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onChooseAgain])

  async function copyReflection() {
    try {
      await navigator.clipboard.writeText(formatReflection(card))
      setStatus("Copied to clipboard")
    } catch {
      setStatus("Copy failed")
    }
  }

  async function saveAsImage() {
    if (!cardRef.current) {
      return
    }

    try {
      setStatus("Preparing image")
      const { toPng } = await import("html-to-image")
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#fffaf4"
      })
      const link = document.createElement("a")
      link.href = dataUrl
      link.download = `${card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-reflection.png`
      link.click()
      setStatus("Image saved")
    } catch {
      setStatus("Image save failed")
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#f8f0e3]/78 px-4 py-6 backdrop-blur-md sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="revealed-card-title"
      tabIndex={-1}
      ref={dialogRef}
    >
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 28, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, y: 24, rotateX: 5 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          ref={cardRef}
          className="pearl-frame reflection-prose rounded-[30px] p-5 shadow-pearl sm:p-7"
        >
          <article className="rounded-[24px] border border-pearl-champagne/24 bg-white/72 px-5 py-7 backdrop-blur sm:px-9 sm:py-9">
            <p className="text-center text-xs font-medium uppercase tracking-[0.28em] text-pearl-mauve">
              Your card for today
            </p>
            <h2
              id="revealed-card-title"
              className="mt-3 text-center font-serif text-4xl leading-tight text-pearl-ink sm:text-5xl"
            >
              {card.title}
            </h2>

            <div className="mt-8 grid gap-5 text-pearl-ink/78">
              <section>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-pearl-mauve">
                  Empowering Message
                </h3>
                <p className="mt-2 text-lg leading-8">{card.message}</p>
              </section>

              <section>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-pearl-mauve">
                  Insightful Lesson
                </h3>
                <p className="mt-2 text-lg leading-8">{card.lesson}</p>
              </section>

              <section>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-pearl-mauve">
                  Reflective Question
                </h3>
                <p className="mt-2 font-serif text-2xl leading-9 text-pearl-ink">
                  {card.question}
                </p>
              </section>

              <section>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-pearl-mauve">
                  Sweet Words
                </h3>
                <p className="mt-2 text-lg leading-8">{card.sweetWords}</p>
              </section>
            </div>

            <p className="mt-8 text-center text-sm italic text-pearl-ink/54">
              Take what feels useful. Leave what does not.
            </p>
          </article>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="min-h-6 text-sm text-pearl-ink/62" aria-live="polite">
            {status}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={copyReflection}
              className="inline-flex items-center gap-2 rounded-full border border-pearl-champagne/45 bg-white/70 px-4 py-2.5 text-sm font-medium text-pearl-ink shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-pearl-mauve/40"
            >
              <Copy className="h-4 w-4" />
              Copy Reflection
            </button>
            <button
              type="button"
              onClick={saveAsImage}
              className="inline-flex items-center gap-2 rounded-full border border-pearl-champagne/45 bg-white/70 px-4 py-2.5 text-sm font-medium text-pearl-ink shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-pearl-mauve/40"
            >
              <Download className="h-4 w-4" />
              Save as Image
            </button>
            <button
              type="button"
              onClick={onChooseAgain}
              className="inline-flex items-center gap-2 rounded-full bg-pearl-ink px-4 py-2.5 text-sm font-medium text-white shadow-card transition hover:bg-[#2f2925] focus:outline-none focus:ring-2 focus:ring-pearl-mauve/50"
            >
              <RefreshCw className="h-4 w-4" />
              Choose Again
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
