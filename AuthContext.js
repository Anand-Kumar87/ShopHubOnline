'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Simulate checking auth status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      // In a real app, this would be a call to your auth service
      // For demo purposes, we'll check localStorage
      const storedUser = localStorage.getItem('user')
      
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
        } catch (error) {
          console.error('Failed to parse user from localStorage:', error)
          setUser(null)
        }
      }
      
      setLoading(false)
    }
    
    checkAuthStatus()
  }, [])
  
  // Login function
  const login = async (email, password) => {
    // In a real app, this would be a call to your auth API
    // For demo purposes, we'll simulate a successful login
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const mockUser = {
        id: '123',
        name: 'John Doe',
        email,
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
      
      // Save to state and localStorage
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      
      return { success: true, user: mockUser }
    } catch (error) {
      console.error('Login failed:', error)
      return { success: false, error: 'Invalid login credentials' }
    }
  }
  
  // Register function
  const register = async (name, email, password) => {
    // In a real app, this would be a call to your auth API
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const mockUser = {
        id: '123',
        name,
        email,
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
      
      // Save to state and localStorage
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      
      return { success: true, user: mockUser }
    } catch (error) {
      console.error('Registration failed:', error)
      return { success: false, error: 'Registration failed' }
    }
  }
  
  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }
  
  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      logout,
      isAuthenticated: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 