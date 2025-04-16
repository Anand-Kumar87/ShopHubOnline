'use client'

import { useState } from 'react'
import { FiMail, FiCheckCircle } from 'react-icons/fi'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email address')
      return
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    setLoading(true)
    setError('')
    
    try {
      // In a real app, this would be an API call to your newsletter service
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitted(true)
      setEmail('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Newsletter signup error:', err)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="bg-primary-600 text-white rounded-2xl overflow-hidden">
      <div className="px-6 py-10 md:py-12 md:px-12 max-w-4xl mx-auto">
        {submitted ? (
          <div className="flex flex-col items-center text-center">
            <div className="bg-white/20 rounded-full p-3 mb-6">
              <FiCheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Thank You for Subscribing!</h3>
            <p className="text-white/80 max-w-md mx-auto">
              You've successfully signed up for our newsletter. Get ready for exclusive offers, product updates, and more!
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="mb-6 md:mb-0 md:mr-8 md:flex-shrink-0">
                <div className="inline-flex items-center justify-center bg-white/20 rounded-full p-3 mb-4">
                  <FiMail size={24} />
                </div>
                <h3 className="text-2xl font-bold">Subscribe to our newsletter</h3>
                <p className="mt-2 text-white/80">
                  Stay updated with the latest products, exclusive offers, and more.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 pr-32 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-1 top-1 px-4 py-2 bg-white text-primary-600 rounded-lg font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {error && <p className="mt-2 text-red-300 text-sm">{error}</p>}
                <p className="mt-2 text-white/60 text-sm">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
} 