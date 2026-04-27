import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import './experience.css'

export const metadata: Metadata = {
  title: 'LIFTStack — Technical Experience',
  description:
    'Premium technical experience for LIFTStack implementation, automation, rescue, delivery proof, and Genesis AI connection.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
