'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FiArrowLeft, FiArrowRight, FiStar } from 'react-icons/fi'

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideRef = useRef(null)
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Verified Buyer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 5,
      text: 'I am extremely satisfied with my purchase from ShopHub. The product quality exceeded my expectations, and the customer service was exceptional. Will definitely be shopping here again!',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Verified Buyer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4,
      text: 'The delivery was prompt, and the product was exactly as described. I appreciate the attention to detail in the packaging. Would recommend ShopHub to friends and family.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Verified Buyer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 5,
      text: 'I was hesitant to order online, but ShopHub made the experience seamless. The website is user-friendly, and the product arrived in perfect condition. Very happy with my purchase!',
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'Verified Buyer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4,
      text: 'Great product selection and competitive prices. The shipping was faster than I expected. The only suggestion would be to add more payment options. Overall, a pleasant shopping experience.',
    },
    {
      id: 5,
      name: 'Olivia Parker',
      title: 'Verified Buyer',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 5,
      text: 'The quality of the products is outstanding. I ordered multiple items, and all of them met my expectations. The customer support was also very responsive when I had questions.',
    },
  ]
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }
  
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  const viewportTestimonials = testimonials.length <= 3
    ? testimonials
    : [
        testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
      ]
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-sm font-medium text-primary-600">TESTIMONIALS</p>
          <h2 className="section-title mb-0">What Our Customers Say</h2>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            aria-label="Previous testimonial"
          >
            <FiArrowLeft size={18} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            aria-label="Next testimonial"
          >
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
      
      {/* Testimonial Cards - Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {viewportTestimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`bg-white p-6 rounded-xl shadow-md transition-all duration-300 ${
              index === 1 ? 'ring-2 ring-primary-500 transform -translate-y-4' : ''
            }`}
          >
            <div className="flex items-center space-x-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  className={i < testimonial.rating ? 'fill-current' : ''} 
                  size={16} 
                />
              ))}
            </div>
            
            <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={48} 
                  height={48} 
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Testimonial Cards - Mobile */}
      <div className="md:hidden">
        <div
          ref={slideRef}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <div className="flex items-center space-x-1 text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <FiStar 
                key={i} 
                className={i < testimonials[currentIndex].rating ? 'fill-current' : ''} 
                size={16} 
              />
            ))}
          </div>
          
          <p className="text-gray-700 mb-6">"{testimonials[currentIndex].text}"</p>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                width={48} 
                height={48} 
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].title}</p>
            </div>
          </div>
        </div>
        
        {/* Indicator Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 