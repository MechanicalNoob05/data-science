import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({ 
  subsets: ['latin'],
  weight:['300','100'],
  display: 'swap', 
  adjustFontFallback: false
} )

export const metadata = {
  title: 'LOCKCHECK',
  description: 'Learn how a password checking tool can assess password security by detecting if passwords have been compromised in data breaches, protecting against dictionary attacks, and empowering users to secure their online accounts and personal information with unique and complex passwords.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
