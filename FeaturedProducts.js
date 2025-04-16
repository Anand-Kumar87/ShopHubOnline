'use client'

import { useState, useEffect } from 'react'
import ProductCard from '../products/ProductCard'

export default function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  // Simulating API fetch with mock data
  useEffect(() => {
    // In a real app, this would be a fetch call to your API
    const fetchProducts = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const mockProducts = [
          {
            id: 1,
            name: 'Wireless Noise Cancelling Headphones',
            price: 199.99,
            rating: 4.8,
            reviews: 124,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Electronics',
            isNew: true,
            isFeatured: true,
            discount: 0,
          },
          {
            id: 2,
            name: 'Premium Leather Wallet',
            price: 49.99,
            rating: 4.5,
            reviews: 89,
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Accessories',
            isNew: false,
            isFeatured: true,
            discount: 10,
          },
          {
            id: 3,
            name: 'Smart Watch Series 5',
            price: 299.99,
            rating: 4.7,
            reviews: 156,
            image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Electronics',
            isNew: true,
            isFeatured: true,
            discount: 15,
          },
          {
            id: 4,
            name: 'Cotton Casual T-Shirt',
            price: 24.99,
            rating: 4.3,
            reviews: 67,
            image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Clothing',
            isNew: false,
            isFeatured: true,
            discount: 0,
          },
          {
            id: 5,
            name: 'Stainless Steel Water Bottle',
            price: 29.99,
            rating: 4.6,
            reviews: 42,
            image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Home & Kitchen',
            isNew: false,
            isFeatured: true,
            discount: 0,
          },
          {
            id: 6,
            name: 'Organic Face Moisturizer',
            price: 34.99,
            rating: 4.4,
            reviews: 78,
            image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Beauty & Personal Care',
            isNew: true,
            isFeatured: true,
            discount: 5,
          },
          {
            id: 7,
            name: 'Wireless Charging Pad',
            price: 39.99,
            rating: 4.2,
            reviews: 54,
            image: 'https://images.unsplash.com/photo-1622445515837-bbb2bf03f7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Electronics',
            isNew: false,
            isFeatured: true,
            discount: 0,
          },
          {
            id: 8,
            name: 'Fitness Tracker Band',
            price: 59.99,
            rating: 4.5,
            reviews: 92,
            image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            category: 'Sports & Outdoors',
            isNew: true,
            isFeatured: true,
            discount: 8,
          },
        ]
        
        setProducts(mockProducts)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }
    
    fetchProducts()
  }, [])
  
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 aspect-square rounded-lg mb-3"></div>
            <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
            <div className="bg-gray-200 h-4 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    )
  }
  
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <a href="/products" className="btn-primary">
          View All Products
        </a>
      </div>
    </div>
  )
} 