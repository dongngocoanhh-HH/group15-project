// Mảng tạm lưu user
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// GET /users
const getUsers = (req, res) => {
  res.json(users);
};

// POST /users
const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = { getUsers, createUser };
