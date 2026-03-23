import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ["normal", "italic"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#7B1818',
}

export const metadata: Metadata = {
  title: 'MyVirtualCloset',
  description: 'Tu armario virtual - Organiza, comparte y descubre outfits',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${playfair.variable} font-sans antialiased bg-muted/30 flex items-center justify-center min-h-screen`}>
        <div className="max-w-sm w-full mx-auto h-screen shadow-2xl border-x border-gray-200 overflow-hidden relative bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}
