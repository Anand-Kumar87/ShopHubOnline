-- Database Schema for User Authentication System

-- Drop existing tables if they exist
DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT chk_email_format CHECK (email REGEXP '.+@gmail\\.com$')
);

-- Create index for email lookups
CREATE INDEX idx_users_email ON users(email);

-- Sample queries

-- Query to create a new user (example - do not use in production without hashing)
-- INSERT INTO users (name, email, password) VALUES ('John Doe', 'john.doe@gmail.com', 'hashedpassword');

-- Query to find a user by email
-- SELECT id, name, email, created_at FROM users WHERE email = 'john.doe@gmail.com';

-- Query to update a user's password
-- UPDATE users SET password = 'newhashedpassword' WHERE id = 1;

-- Query to delete a user
-- DELETE FROM users WHERE id = 1;

-- MongoDB Schema (for NoSQL alternative)
/*
{
  "users": {
    "bsonType": "object",
    "required": ["name", "email", "password", "created_at"],
    "properties": {
      "_id": {
        "bsonType": "objectId"
      },
      "name": {
        "bsonType": "string",
        "description": "Full name of the user"
      },
      "email": {
        "bsonType": "string",
        "pattern": "^.+@gmail\\.com$",
        "description": "Email address of the user (must be Gmail)"
      },
      "password": {
        "bsonType": "string",
        "description": "Hashed password"
      },
      "created_at": {
        "bsonType": "date",
        "description": "Timestamp when the user was created"
      },
      "updated_at": {
        "bsonType": "date",
        "description": "Timestamp when the user was last updated"
      }
    }
  }
}
*/

-- Create validation rules for Gmail format (using triggers for MySQL)
DELIMITER //
CREATE TRIGGER check_email_format BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    IF NEW.email NOT REGEXP '.+@gmail\\.com$' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Email must be a valid Gmail address';
    END IF;
END//
DELIMITER ; 