"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cards } from "@/data/cards"
import type { ReflectionCard } from "@/types/card"
import { CardItem } from "@/components/CardItem"
import { RevealedCard } from "@/components/RevealedCard"

const CARD_COUNT = 8

function cleanCardCopy(card: ReflectionCard): ReflectionCard {
  switch (card.id) {
    case 14:
      return {
        ...card,
        question: "What would you approach as gentle practice today?"
      }
    case 29:
      return {
        ...card,
        lesson:
          "Self-determination theory suggests that autonomy supports motivation when actions feel personally endorsed and aligned with chosen values (Deci and Ryan, 2000)."
      }
    case 52:
      return {
        ...card,
        message:
          "You are allowed to approach a task with curiosity and a little more ease."
      }
    case 53:
      return {
        ...card,
        question: "What question would open the moment with more room?"
      }
    case 66:
      return {
        ...card,
        message:
          "You are allowed to build stamina through care, pacing, and steady attention."
      }
    case 79:
      return {
        ...card,
        message: "You are allowed to treat your energy as a useful signal."
      }
    case 82:
      return {
        ...card,
        message:
          "You can pour your attention into one cup and let the table feel clearer."
      }
    case 84:
      return {
        ...card,
        message:
          "You can turn feedback into a learning loop with a next step."
      }
    default:
      return card
  }
}

function selectRandomCards() {
  const pool = [...cards]

  for (let index = pool.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const current = pool[index]
    pool[index] = pool[randomIndex]
    pool[randomIndex] = current
  }

  return pool.slice(0, CARD_COUNT).map(cleanCardCopy)
}

export function CardGrid() {
  const [visibleCards, setVisibleCards] = useState<ReflectionCard[] | null>(
    null
  )
  const [selectedCard, setSelectedCard] = useState<ReflectionCard | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)

  const refreshCards = useCallback(() => {
    setSelectedCard(null)
    setVisibleCards(selectRandomCards())
    setRefreshKey((value) => value + 1)
  }, [])

  useEffect(() => {
    refreshCards()
  }, [refreshCards])

  if (!visibleCards) {
    return (
      <section
        id="cards"
        className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10"
        aria-label="Loading reflection cards"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {Array.from({ length: CARD_COUNT }).map((_, index) => (
            <div
              key={index}
              className="aspect-[3/4] animate-pulse rounded-[28px] bg-white/45 shadow-card"
            />
          ))}
        </div>
      </section>
    )
  }

  if (visibleCards.length === 0) {
    return (
      <section
        id="cards"
        className="mx-auto w-full max-w-7xl px-5 py-10 text-center sm:px-8 lg:px-10"
      >
        <p className="font-serif text-3xl text-pearl-ink">
          The cards are resting.
        </p>
        <button
          type="button"
          onClick={refreshCards}
          className="mt-5 rounded-full bg-pearl-ink px-5 py-3 text-sm font-medium text-white"
        >
          Try Again
        </button>
      </section>
    )
  }

  const selectedCardId = selectedCard?.id ?? null

  return (
    <section
      id="cards"
      className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10"
      aria-labelledby="card-grid-heading"
    >
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-pearl-mauve">
            Today&apos;s eight
          </p>
          <h2
            id="card-grid-heading"
            className="mt-2 font-serif text-4xl text-pearl-ink"
          >
            Choose one card
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-pearl-ink/62">
          Let one gentle message meet you where you are today.
        </p>
      </div>

      <motion.div
        key={refreshKey}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {visibleCards.map((card, index) => (
          <CardItem
            key={card.id}
            card={card}
            index={index}
            isSelected={selectedCardId === card.id}
            isDimmed={selectedCardId !== null && selectedCardId !== card.id}
            onSelect={setSelectedCard}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedCard ? (
          <RevealedCard card={selectedCard} onChooseAgain={refreshCards} />
        ) : null}
      </AnimatePresence>
    </section>
  )
}