'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useAuth } from '../../context/AuthContext'

export default function MobileMenu({ onClose }) {
  const pathname = usePathname()
  const { user } = useAuth()
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  
  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ]
  
  const categories = [
    { name: 'Electronics', href: '/category/electronics' },
    { name: 'Clothing', href: '/category/clothing' },
    { name: 'Home & Kitchen', href: '/category/home-kitchen' },
    { name: 'Beauty & Personal Care', href: '/category/beauty' },
    { name: 'Sports & Outdoors', href: '/category/sports' },
  ]
  
  const userLinks = user ? [
    { name: 'My Account', href: '/account' },
    { name: 'Orders', href: '/account/orders' },
    { name: 'Wishlist', href: '/wishlist' },
    { name: 'Settings', href: '/account/settings' },
    { name: 'Logout', href: '/api/auth/signout' },
  ] : [
    { name: 'Sign In', href: '/login' },
    { name: 'Register', href: '/register' },
  ]
  
  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="container-custom py-4">
        <div className="flex flex-col space-y-6">
          {/* Main Navigation */}
          <nav>
            <ul className="space-y-4">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={`block py-2 text-lg ${pathname === link.href ? 'text-primary-600 font-medium' : 'text-gray-800'}`}
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              
              {/* Categories Dropdown */}
              <li>
                <button 
                  className="flex items-center justify-between w-full py-2 text-lg text-gray-800"
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                >
                  <span>Categories</span>
                  {categoriesOpen ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                
                {categoriesOpen && (
                  <ul className="pl-4 space-y-2 mt-2 mb-4">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <Link 
                          href={category.href}
                          className={`block py-2 ${pathname === category.href ? 'text-primary-600' : 'text-gray-700'}`}
                          onClick={onClose}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
          
          {/* User Links */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-500 mb-2">Account</p>
            <ul className="space-y-2">
              {userLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={`block py-2 ${pathname === link.href ? 'text-primary-600' : 'text-gray-800'}`}
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Close Button */}
          <div className="border-t border-gray-200 pt-4">
            <button 
              className="w-full py-3 px-4 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
              onClick={onClose}
            >
              Close Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 