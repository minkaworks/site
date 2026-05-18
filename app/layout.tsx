import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Minka Works | Open work. Useful systems.',
  description:
    'Minka creates open-source tools, AI workflows, and reusable documentation for technical builders.',
  metadataBase: new URL('https://minkaworks.com'),
  openGraph: {
    title: 'Minka Works',
    description:
      'Open-source tools, AI workflows, and reusable documentation for technical builders.',
    url: 'https://minkaworks.com',
    siteName: 'Minka Works',
    type: 'website',
  },
  appleWebApp: {
    capable: true,
    title: 'Minka Works',
    statusBarStyle: 'black',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [{ url: '/favicon-512.png', sizes: '512x512', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#121416',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Public+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
