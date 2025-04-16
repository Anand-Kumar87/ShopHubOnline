'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch, FiX } from 'react-icons/fi'

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState('')
  const router = useRouter()
  
  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      if (onClose) onClose()
    }
  }
  
  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="relative flex items-center">
        <FiSearch className="absolute left-4 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for products, brands, categories..."
          className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        {query && (
          <button
            type="button"
            className="absolute right-16 text-gray-500 hover:text-gray-700"
            onClick={() => setQuery('')}
            aria-label="Clear search"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}
        <button 
          type="submit" 
          className="absolute right-4 bg-primary-500 text-white p-1 rounded-full hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300"
          aria-label="Search"
        >
          <FiSearch className="w-4 h-4" />
        </button>
      </div>
      
      {onClose && (
        <button 
          type="button" 
          className="absolute -top-3 -right-3 bg-gray-200 text-gray-600 p-1 rounded-full hover:bg-gray-300 focus:outline-none"
          onClick={onClose}
          aria-label="Close search"
        >
          <FiX className="w-4 h-4" />
        </button>
      )}
    </form>
  )
} 