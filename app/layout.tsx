import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Minka Works | Practical AI for Latin American Businesses',
  description:
    'Minka Works builds practical AI tools for Latin American businesses that still run on WhatsApp, spreadsheets, and manual workflows.',
  metadataBase: new URL('https://minkaworks.com'),
  openGraph: {
    title: 'Minka Works',
    description:
      'Practical AI tools for Latin American businesses that still run on WhatsApp, spreadsheets, and manual workflows.',
    url: 'https://minkaworks.com',
    siteName: 'Minka Works',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
