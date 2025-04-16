'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, children, className = '', ...props }) {
  const pathname = usePathname()
  const isActive = pathname === href
  
  return (
    <Link 
      href={href} 
      className={`text-gray-800 font-medium hover:text-primary-600 transition-colors ${isActive ? 'text-primary-600' : ''} ${className}`} 
      {...props}
    >
      {children}
    </Link>
  )
} 