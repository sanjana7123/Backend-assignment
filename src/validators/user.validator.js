const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateCreateUser = (userData) => {
  const errors = [];

  if (!userData.name || typeof userData.name !== 'string') {
    errors.push('Name is required and must be a string');
  }

  if (!userData.email || typeof userData.email !== 'string') {
    errors.push('Email is required and must be a string');
  } else if (!validateEmail(userData.email)) {
    errors.push('Invalid email format');
  }

  if (userData.age !== undefined && userData.age !== null) {
    if (typeof userData.age !== 'number' || userData.age < 0) {
      errors.push('Age must be a positive number');
    }
  }

  return errors;
};

const validateUpdateUser = (userData) => {
  const errors = [];

  if (userData.name !== undefined && (!userData.name || typeof userData.name !== 'string')) {
    errors.push('Name must be a string');
  }

  if (userData.email !== undefined) {
    if (!userData.email || typeof userData.email !== 'string') {
      errors.push('Email must be a string');
    } else if (!validateEmail(userData.email)) {
      errors.push('Invalid email format');
    }
  }

  if (userData.age !== undefined && userData.age !== null) {
    if (typeof userData.age !== 'number' || userData.age < 0) {
      errors.push('Age must be a positive number');
    }
  }

  return errors;
};

module.exports = {
  validateCreateUser,
  validateUpdateUser
};
