<<<<<<< HEAD
// backend/server.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json()); // body parser

// mount routes at root so endpoints are /users
app.use('/', userRoutes);

app.get('/', (req, res) => res.json({ message: 'API OK' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
const express = require('express');
const dotenv = require('dotenv');

// Load biến môi trường từ file .env (nếu có)
dotenv.config();

const app = express();
app.use(express.json()); // parse JSON body

const userRoutes = require('./routes/user');
app.use('/users', userRoutes);

// Route test
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
>>>>>>> ba9e8a33eebea458e6bc517108d3c84b2281d59e
