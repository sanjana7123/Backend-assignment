const { createUser } = require('../models/user.model');

// In-memory database
let users = [
  createUser(1, "John Doe", "john@example.com", 28),
  createUser(2, "Jane Smith", "jane@example.com", 32),
  createUser(3, "Bob Johnson", "bob@example.com", 25)
];

let nextId = 4;

module.exports = {
  users,
  getNextId: () => nextId++
};
