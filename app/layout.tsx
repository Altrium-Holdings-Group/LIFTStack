import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'LIFTStack — Operating Layer',
  description:
    'GitHub-controlled operating layer for LIFTStack technical intake, implementation receipts, automation posture, and Command Center sync.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
