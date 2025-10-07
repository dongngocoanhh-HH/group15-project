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
