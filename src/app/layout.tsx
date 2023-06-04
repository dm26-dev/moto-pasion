"use client"

import { usePathname } from 'next/navigation'
import { Header } from '../components/header/Header'
import '../sass/index.scss'

export const metadata = {
  title: 'Moto Pasion',
  description: 'Para amantes de verdad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathName = usePathname()
  const urlExceptNavbar = ['/', '/home']

  return (
    <html lang="en">
      <body >
        {!urlExceptNavbar.includes(pathName) && <Header />}
        {children}
      </body>
    </html>
  )
}
