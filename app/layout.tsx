import './globals.css'
import { Inter } from 'next/font/google'
import {Navbar} from "@/app/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marvel-Pedia',
  description: 'A Marvel Comics Wiki',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
