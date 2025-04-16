'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  
  const {
    id,
    name,
    price,
    image,
    rating,
    reviews,
    discount,
    isNew,
  } = product
  
  const discountedPrice = discount ? price - (price * discount / 100) : price
  
  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }
  
  return (
    <Link 
      href={`/product/${id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card overflow-hidden transform transition-all duration-300 hover:-translate-y-1">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && (
              <span className="bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded">New</span>
            )}
            {discount > 0 && (
              <span className="bg-accent-500 text-white text-xs font-semibold px-2 py-1 rounded">-{discount}%</span>
            )}
          </div>
          
          {/* Action Buttons - Shown on hover */}
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-2 px-4 flex justify-between transition-transform duration-300 ${
              isHovered ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <button 
              className="text-gray-700 hover:text-primary-600 p-1"
              onClick={(e) => {
                e.preventDefault()
                // Here you would implement wishlist functionality
              }}
              aria-label="Add to wishlist"
            >
              <FiHeart size={18} />
            </button>
            
            <button 
              className="bg-primary-500 text-white px-3 py-1 rounded flex items-center text-sm hover:bg-primary-600 transition"
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              <FiShoppingCart size={14} className="mr-1" />
              Add to Cart
            </button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm md:text-base font-medium text-gray-900 line-clamp-2 mb-1">{name}</h3>
          
          {/* Price */}
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-gray-900">
              ${discountedPrice.toFixed(2)}
            </span>
            {discount > 0 && (
              <span className="text-sm text-gray-500 line-through">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Rating */}
          <div className="flex items-center text-sm text-gray-600">
            <div className="flex items-center text-accent-500 mr-1">
              <FiStar className="fill-current" size={14} />
              <span className="ml-1">{rating}</span>
            </div>
            <span>({reviews} reviews)</span>
          </div>
        </div>
      </div>
    </Link>
  )
} 