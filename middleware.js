const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const { body } = require('express-validator');

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Use environment variable in production

// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
  // Get auth header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"
  
  if (!token) {
    return res.status(401).json({ 
      error: 'Access denied. No token provided.' 
    });
  }
  
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(403).json({ 
      error: 'Invalid or expired token' 
    });
  }
};

// Role-based access control middleware
const authorizeRole = (role) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ 
        error: 'Authentication required' 
      });
    }
    
    if (req.user.role !== role) {
      return res.status(403).json({ 
        error: 'Access denied. Insufficient permissions.' 
      });
    }
    
    next();
  };
};

// Rate limiting middleware
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per windowMs
  message: {
    error: 'Too many login attempts. Please try again after 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Registration limiter (less strict than login)
const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 registration attempts per IP per hour
  message: {
    error: 'Too many accounts created from this IP. Please try again after an hour.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Input validation rules
const validateLogin = [
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format')
    .matches(/@gmail\.com$/).withMessage('Only Gmail addresses are allowed'),
  body('password')
    .notEmpty().withMessage('Password is required')
];

const validateRegistration = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format')
    .matches(/@gmail\.com$/).withMessage('Only Gmail addresses are allowed'),
  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
    .matches(/[0-9]/).withMessage('Password must contain at least one number')
    .matches(/[^A-Za-z0-9]/).withMessage('Password must contain at least one special character')
];

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  // Check for specific error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({ 
      error: err.message 
    });
  }
  
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ 
      error: 'Invalid token' 
    });
  }
  
  // Default error
  res.status(500).json({ 
    error: 'Something went wrong on the server' 
  });
};

module.exports = {
  authenticateToken,
  authorizeRole,
  loginLimiter,
  registerLimiter,
  validateLogin,
  validateRegistration,
  errorHandler
}; 