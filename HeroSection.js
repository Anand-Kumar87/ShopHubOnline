'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      title: 'Summer Collection 2023',
      subtitle: 'Up to 50% off on selected items',
      description: 'Discover our latest summer collection with exclusive designs and incredible discounts.',
      buttonText: 'Shop Now',
      buttonLink: '/products/summer-collection',
      image: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      textColor: 'text-white',
    },
    {
      id: 2,
      title: 'New Tech Arrivals',
      subtitle: 'The latest gadgets and accessories',
      description: 'Stay ahead with cutting-edge technology. Explore our new arrivals for tech enthusiasts.',
      buttonText: 'Discover',
      buttonLink: '/products/tech',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      textColor: 'text-white',
    },
    {
      id: 3,
      title: 'Home & Lifestyle',
      subtitle: 'Transform your living space',
      description: 'Refresh your home with our curated collection of modern furniture and décor items.',
      buttonText: 'Explore',
      buttonLink: '/products/home',
      image: 'https://images.unsplash.com/photo-1634712282287-14ed57b91c72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      textColor: 'text-white',
    },
  ]
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }
  
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          {/* Content */}
          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="container-custom text-center">
              <div className="max-w-3xl mx-auto px-4">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${slide.textColor}`}>
                  {slide.title}
                </h2>
                <p className={`text-xl md:text-2xl font-medium mb-6 ${slide.textColor}`}>
                  {slide.subtitle}
                </p>
                <p className={`text-base md:text-lg mb-8 ${slide.textColor} max-w-2xl mx-auto`}>
                  {slide.description}
                </p>
                <Link
                  href={slide.buttonLink}
                  className="btn-primary px-8 py-3 text-lg"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 shadow-lg"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 shadow-lg"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 