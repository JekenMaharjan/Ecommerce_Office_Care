import { Navbar } from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ShopNest - Your One-Stop Shop',
  description: 'Find the best products at great prices',
}

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>)
  );
}

