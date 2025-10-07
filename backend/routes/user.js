<<<<<<< HEAD
// backend/routes/user.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
=======
const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/userController");

// GET /users
router.get("/", getUsers);

// POST /users
router.post("/", createUser);
>>>>>>> ba9e8a33eebea458e6bc517108d3c84b2281d59e

module.exports = router;
