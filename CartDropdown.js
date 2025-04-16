'use client'

import Link from 'next/link'
import { FiX, FiShoppingBag, FiTrash2 } from 'react-icons/fi'
import { useCart } from '../../context/CartContext'
import Image from 'next/image'

export default function CartDropdown({ onClose }) {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart()
  
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Cart panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-xl overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center">
              <FiShoppingBag className="mr-2" />
              Your Cart ({cartItems.length})
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="Close cart"
            >
              <FiX />
            </button>
          </div>
          
          {/* Cart items */}
          <div className="flex-grow">
            {cartItems.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {cartItems.map(item => (
                  <li key={item.id} className="p-4">
                    <div className="flex items-center space-x-4">
                      {/* Product image */}
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-md overflow-hidden relative">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                            <FiShoppingBag size={24} />
                          </div>
                        )}
                      </div>
                      
                      {/* Product info */}
                      <div className="flex-grow">
                        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center mt-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-gray-500 hover:text-gray-700 p-1"
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="mx-2 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-gray-700 p-1"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      {/* Price and remove button */}
                      <div className="flex flex-col items-end space-y-2">
                        <span className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 p-1"
                          aria-label="Remove item"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 p-4">
                <FiShoppingBag size={48} className="text-gray-300 mb-4" />
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <button 
                  onClick={onClose}
                  className="btn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
          
          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="space-y-2">
                <Link 
                  href="/checkout"
                  className="btn-primary w-full block text-center"
                  onClick={onClose}
                >
                  Checkout
                </Link>
                <button 
                  onClick={onClose}
                  className="btn-secondary w-full"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 