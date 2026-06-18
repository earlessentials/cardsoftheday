import { CardGrid } from "@/components/CardGrid"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <CardGrid />
      <Footer />
    </main>
  )
}
