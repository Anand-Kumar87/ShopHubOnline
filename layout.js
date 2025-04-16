import { Inter } from 'next/font/google'
import './styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Commerce Store | Shop Online for Quality Products',
  description: 'Discover a wide range of products at our online store. Shop now for the best deals and fast delivery.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
} 