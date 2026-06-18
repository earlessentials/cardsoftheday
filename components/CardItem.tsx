"use client"

import { motion } from "framer-motion"
import { Circle } from "lucide-react"
import type { ReflectionCard } from "@/types/card"

interface CardItemProps {
  card: ReflectionCard
  index: number
  isSelected: boolean
  isDimmed: boolean
  onSelect: (card: ReflectionCard) => void
}

export function CardItem({
  card,
  index,
  isSelected,
  isDimmed,
  onSelect
}: CardItemProps) {
  return (
    <motion.button
      type="button"
      className="group relative aspect-[3/4] min-h-[210px] w-full rounded-[28px] focus:outline-none focus-visible:ring-2 focus-visible:ring-pearl-mauve/60 focus-visible:ring-offset-4 focus-visible:ring-offset-pearl-cream"
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: isDimmed ? 0.3 : 1,
        y: 0,
        scale: isSelected ? 1.02 : 1
      }}
      transition={{ duration: 0.42, delay: index * 0.04, ease: "easeOut" }}
      whileHover={isDimmed ? undefined : { y: -8, scale: 1.018 }}
      whileTap={isDimmed ? undefined : { scale: 0.99 }}
      onClick={() => onSelect(card)}
      disabled={isDimmed || isSelected}
      aria-label={`Choose reflection card ${index + 1}`}
      aria-pressed={isSelected}
    >
      <motion.div
        className="relative h-full w-full rounded-[28px]"
        animate={{ rotateY: isSelected ? 180 : 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="card-face card-back-pattern absolute inset-0 overflow-hidden rounded-[28px] border border-white/75 shadow-card transition duration-300 group-hover:shadow-pearl">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_18%,rgba(255,255,255,0.72)_46%,transparent_70%)] opacity-0 transition duration-500 group-hover:translate-x-8 group-hover:opacity-80" />
          <div className="absolute inset-5 z-10 flex flex-col items-center justify-center gap-5 rounded-[22px] border border-white/60 px-4 py-5">
            <Circle className="h-16 w-16 fill-white/78 text-pearl-champagne drop-shadow-sm" />
            <span className="text-xs uppercase tracking-[0.24em] text-pearl-ink/54">
              Card {index + 1}
            </span>
          </div>
        </div>

        <div
          className="card-face pearl-frame absolute inset-0 flex rotate-y-180 flex-col items-center justify-center rounded-[28px] p-6 text-center shadow-pearl"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-pearl-mauve">
            Opening
          </p>
          <h3 className="mt-4 font-serif text-3xl leading-tight text-pearl-ink">
            {card.title}
          </h3>
        </div>
      </motion.div>
    </motion.button>
  )
}
