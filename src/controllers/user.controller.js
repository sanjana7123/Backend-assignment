const userService = require('../services/user.service');

const getUsers = (req, res) => {
  try {
    const { search, sort, order } = req.query;
    const users = userService.getAllUsers(search, sort, order);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = (req, res) => {
  try {
    const user = userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = userService.createUser({ name, email, age });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.message.includes('required')) {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
};

const updateUser = (req, res) => {
  try {
    const { name, email, age } = req.body;
    const updatedUser = userService.updateUser(req.params.id, { name, email, age });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = (req, res) => {
  try {
    const deleted = userService.deleteUser(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
