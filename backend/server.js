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
