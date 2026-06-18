import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cards of the Day by Pearling",
  description:
    "A pearl-themed daily reflection card experience with gentle messages, meaningful lessons, and questions to carry through the day."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
