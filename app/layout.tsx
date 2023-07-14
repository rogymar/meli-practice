import { Header } from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Parent } from '@/components/types/props'

export const metadata: Metadata = {
  title: 'Meli-Practice',
  description: 'Búsqueda y detalle de productos con la API de MercadoLibre',
}

export default function RootLayout({ children}: Parent) {
  return (
    <html lang="en">
      <body className='bg-background text-darkGray' >
          <Header />
          {children}
        </body>
    </html>
  )
}
