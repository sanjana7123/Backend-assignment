// User model - creates user objects with proper formatting
const createUser = (id, name, email, age) => {
  return {
    id,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    age: age || null
  };
};

module.exports = { createUser };
