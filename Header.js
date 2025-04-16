'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiSearch, FiUser, FiShoppingCart, FiHeart, FiMenu, FiX } from 'react-icons/fi'
import SearchBar from './common/SearchBar'
import NavLink from './common/NavLink'
import MobileMenu from './common/MobileMenu'
import CartDropdown from './cart/CartDropdown'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

// Client component
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { cartItems } = useCart()
  const { user } = useAuth()
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const toggleCart = () => setCartOpen(!cartOpen)
  const toggleSearch = () => setSearchOpen(!searchOpen)
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ShopHub
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Shop</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5" />
            </button>
            
            <Link 
              href="/wishlist" 
              className="p-2 hover:bg-gray-100 rounded-full transition hidden sm:flex"
              aria-label="Wishlist"
            >
              <FiHeart className="w-5 h-5" />
            </Link>
            
            <Link 
              href={user ? '/account' : '/login'} 
              className="p-2 hover:bg-gray-100 rounded-full transition"
              aria-label={user ? 'My Account' : 'Sign In'}
            >
              <FiUser className="w-5 h-5" />
            </Link>
            
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition relative"
              onClick={toggleCart}
              aria-label="Shopping Cart"
            >
              <FiShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-primary-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition md:hidden"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Search Bar - Full width when open */}
        {searchOpen && (
          <div className="py-3 animate-slide-up">
            <SearchBar onClose={toggleSearch} />
          </div>
        )}
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
      
      {/* Cart Dropdown */}
      {cartOpen && <CartDropdown onClose={toggleCart} />}
    </header>
  )
} 