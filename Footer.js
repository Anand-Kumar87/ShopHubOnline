'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ShopHub</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for quality products at affordable prices. Shop with confidence and enjoy our excellent customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/products/new-arrivals" className="text-gray-400 hover:text-white transition">New Arrivals</Link></li>
              <li><Link href="/products/best-sellers" className="text-gray-400 hover:text-white transition">Best Sellers</Link></li>
              <li><Link href="/products/featured" className="text-gray-400 hover:text-white transition">Featured Products</Link></li>
              <li><Link href="/products/discounted" className="text-gray-400 hover:text-white transition">Discounted Items</Link></li>
              <li><Link href="/products/categories" className="text-gray-400 hover:text-white transition">All Categories</Link></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-white transition">Shipping Information</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-white transition">Returns & Exchanges</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition">FAQs</Link></li>
              <li><Link href="/size-guide" className="text-gray-400 hover:text-white transition">Size Guide</Link></li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <img src="/icons/visa.svg" alt="Visa" className="h-8" />
            <img src="/icons/mastercard.svg" alt="Mastercard" className="h-8" />
            <img src="/icons/amex.svg" alt="American Express" className="h-8" />
            <img src="/icons/paypal.svg" alt="PayPal" className="h-8" />
            <img src="/icons/apple-pay.svg" alt="Apple Pay" className="h-8" />
            <img src="/icons/google-pay.svg" alt="Google Pay" className="h-8" />
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 