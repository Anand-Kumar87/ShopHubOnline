'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function CategorySection() {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      link: '/category/electronics',
      count: 128,
    },
    {
      id: 2,
      name: 'Clothing',
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      link: '/category/clothing',
      count: 235,
    },
    {
      id: 3,
      name: 'Home & Kitchen',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      link: '/category/home-kitchen',
      count: 157,
    },
    {
      id: 4,
      name: 'Beauty & Personal Care',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      link: '/category/beauty',
      count: 94,
    },
    {
      id: 5,
      name: 'Sports & Outdoors',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      link: '/category/sports',
      count: 112,
    },
    {
      id: 6,
      name: 'Books & Media',
      image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      link: '/category/books',
      count: 89,
    },
  ]
  
  return (
    <div>
      <h2 className="section-title text-center mb-8">Shop by Category</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link 
            key={category.id}
            href={category.link}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-2 transition transform group-hover:shadow-lg">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 w-full p-4 text-white">
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm opacity-90">{category.count} products</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/categories" className="btn-primary">
          View All Categories
        </Link>
      </div>
    </div>
  )
} 