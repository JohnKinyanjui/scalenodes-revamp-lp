import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ScaleNodes',
  description: 'ScaleNodes Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
