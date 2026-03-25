const db = require('../data/db');
const { createUser } = require('../models/user.model');
const { validateCreateUser, validateUpdateUser } = require('../validators/user.validator');

const getAllUsers = (searchQuery, sortBy, sortOrder) => {
  let result = [...db.users];

  if (searchQuery) {
    const search = searchQuery.toLowerCase();
    result = result.filter(user => 
      user.name.toLowerCase().includes(search) || 
      user.email.toLowerCase().includes(search)
    );
  }

  if (sortBy) {
    const order = sortOrder === 'desc' ? -1 : 1;
    result.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1 * order;
      if (a[sortBy] > b[sortBy]) return 1 * order;
      return 0;
    });
  }

  return result;
};

const getUserById = (id) => {
  return db.users.find(user => user.id === parseInt(id));
};

const createNewUser = (userData) => {
  const errors = validateCreateUser(userData);
  if (errors.length > 0) {
    throw new Error(errors.join(', '));
  }

  const newUser = createUser(
    db.getNextId(),
    userData.name,
    userData.email,
    userData.age
  );
  
  db.users.push(newUser);
  return newUser;
};

const updateUser = (id, userData) => {
  const index = db.users.findIndex(user => user.id === parseInt(id));
  if (index === -1) return null;

  const errors = validateUpdateUser(userData);
  if (errors.length > 0) {
    throw new Error(errors.join(', '));
  }

  db.users[index] = {
    ...db.users[index],
    ...userData,
    id: parseInt(id)
  };
  return db.users[index];
};

const deleteUser = (id) => {
  const index = db.users.findIndex(user => user.id === parseInt(id));
  if (index === -1) return false;
  
  db.users.splice(index, 1);
  return true;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser: createNewUser,
  updateUser,
  deleteUser
};
