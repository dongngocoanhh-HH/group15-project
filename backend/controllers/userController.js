// backend/controllers/userController.js
const { v4: uuidv4 } = require('uuid');

let users = [
  { id: uuidv4(), name: 'Nguyen Van A', email: 'a@example.com' },
  { id: uuidv4(), name: 'Tran Thi B', email: 'b@example.com' }
];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'Missing fields' });
  const newUser = { id: uuidv4(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    return res.json(users[index]);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const exists = users.some(u => u.id === id);
  if (!exists) return res.status(404).json({ message: 'User not found' });
  users = users.filter(u => u.id !== id);
  res.json({ message: "User deleted" });
};
