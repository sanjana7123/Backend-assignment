# User Management REST API

REST API for managing users with proper MVC architecture.

**Live Demo**: https://backend-assignment-ecoo.onrender.com

## Project Structure

```
src/
├── index.js              # Entry point
├── data/                 # In-memory storage
│   └── db.js
├── models/               # Data models
│   └── user.model.js
├── validators/           # Validation logic
│   └── user.validator.js
├── services/             # Business logic
│   └── user.service.js
├── controllers/          # Request handlers
│   └── user.controller.js
└── routes/               # API routes
    └── user.routes.js
```

## Setup

```bash
npm install
npm start
```

Server runs on `http://localhost:3000`

Deployment Link : https://backend-assignment-ecoo.onrender.com

## API Endpoints

### GET /users
List all users with optional filters
- `?search=john` - Search by name or email
- `?sort=name&order=asc` - Sort by field (asc/desc)

### GET /users/:id
Get a specific user by ID

### POST /users
Create a new user
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 28
}
```

### PUT /users/:id
Update an existing user

### DELETE /users/:id
Delete a user

## Testing

```bash
# List all users
curl http://localhost:3000/users

# Search users
curl http://localhost:3000/users?search=john

# Sort users
curl http://localhost:3000/users?sort=name&order=asc

# Get user by ID
curl http://localhost:3000/users/1

# Create user
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","age":30}'

# Update user
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"John Updated","age":29}'

# Delete user
curl -X DELETE http://localhost:3000/users/1
```
