const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'User Management API',
    endpoints: {
      'GET /users': 'Get all users',
      'GET /users/:id': 'Get user by ID',
      'POST /users': 'Create user',
      'PUT /users/:id': 'Update user',
      'DELETE /users/:id': 'Delete user'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
