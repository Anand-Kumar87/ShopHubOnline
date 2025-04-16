# Professional Login System with Backend Integration

A secure, modern login system with Gmail address validation, password strength requirements, and database integration. This system provides both frontend and backend components for a complete authentication solution.

## Features

### Frontend
- Modern, responsive design
- Tabbed interface for login and registration
- Real-time password strength validation
- Gmail address validation with regex
- "Show Password" toggle functionality
- User-friendly error messages
- Loading indicators for async operations
- Session persistence with "Remember Me" option

### Backend
- RESTful API using Node.js and Express
- JWT-based authentication with secure tokens
- Password hashing with bcrypt
- Input validation and sanitization
- Protection against common vulnerabilities
- MySQL/MongoDB database integration

## Prerequisites

- Node.js (v14+)
- NPM or Yarn
- MySQL or MongoDB
- Modern web browser

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/login-system.git
cd login-system
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up the database
For MySQL:
```bash
mysql -u username -p < database-schema.sql
```

For MongoDB, create a new database and collection with the provided schema.

### 4. Configure environment variables
Create a `.env` file in the root directory:
```
PORT=3000
JWT_SECRET=your_secure_jwt_secret
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=login_system
```

### 5. Start the server
```bash
npm start
```

### 6. Access the application
Open `http://localhost:3000` in your browser.

## Security Considerations

1. **Password Security**:
   - Passwords are hashed using bcrypt
   - Minimum requirements: 8 characters, one uppercase, one number, one special character
   - Password strength is validated in real-time

2. **Authentication**:
   - JWT (JSON Web Token) for secure authentication
   - Token expiration to prevent long-lived sessions
   - HTTP-only cookies option for enhanced security

3. **Data Validation**:
   - Server-side validation using express-validator
   - Client-side validation for better UX
   - SQL/NoSQL injection prevention

4. **Rate Limiting**:
   - Protection against brute force attacks
   - IP-based rate limiting for login attempts

5. **HTTPS**:
   - In production, always use HTTPS
   - Enable HSTS header for added security

## API Endpoints

### Authentication
- `POST /api/register` - Register a new user
- `POST /api/login` - Authenticate a user
- `GET /api/profile` - Get the current user's profile (protected)

## Database Schema

### Users Table (MySQL)
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Users Collection (MongoDB)
```json
{
  "_id": ObjectId,
  "name": String,
  "email": String,
  "password": String,
  "created_at": Date,
  "updated_at": Date
}
```

## Demo Credentials

For testing purposes only:
- Email: demo@gmail.com
- Password: Password1!

## Production Deployment

Before deploying to production:
1. Generate a strong, unique JWT secret
2. Set appropriate CORS headers
3. Configure rate limiters
4. Set up proper error logging
5. Enable HTTPS
6. Consider adding 2FA for enhanced security

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 