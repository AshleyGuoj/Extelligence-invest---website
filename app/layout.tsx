import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Investment Philosophy',
  description: 'Discover our core mission and investment thesis in frontier AI opportunities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary">
        {children}
      </body>
    </html>
  )
} 