import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'M I Multipurpose Enterprise - Premium Poultry & Livestock',
  description: 'Quality poultry farming and livestock in Benin City. Fresh broilers, layers, eggs, frozen chicken, and organic manure.',
  keywords: ['poultry', 'livestock', 'broilers', 'layers', 'eggs', 'benin city', 'nigeria', 'organic manure', 'frozen chicken'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
