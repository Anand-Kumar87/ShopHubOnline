'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PromoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* First Promo */}
      <div className="relative overflow-hidden rounded-xl group">
        <div className="relative aspect-[16/9] md:aspect-[3/2] w-full">
          <Image
            src="https://images.unsplash.com/photo-1605086998852-18a6e52c9d0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Summer Collection"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-center p-8">
          <div className="max-w-xs">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Summer Collection</h3>
            <p className="text-white/80 mb-5">Discover our latest summer essentials, designed for comfort and style.</p>
            <Link 
              href="/products/summer-collection" 
              className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 rounded-full font-medium transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Second Promo */}
      <div className="relative overflow-hidden rounded-xl group">
        <div className="relative aspect-[16/9] md:aspect-[3/2] w-full">
          <Image
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Tech Gadgets"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-center p-8">
          <div className="max-w-xs">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Smart Gadgets</h3>
            <p className="text-white/80 mb-5">Explore cutting-edge technology that makes your life easier.</p>
            <Link 
              href="/products/tech" 
              className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 rounded-full font-medium transition"
            >
              Discover Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 