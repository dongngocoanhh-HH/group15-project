const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Kết nối MongoDB
mongoose.connect("mongodb+srv://viet:123@cluster0.3xz2uak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Kết nối MongoDB thành công!"))
  .catch(err => console.error("Lỗi kết nối MongoDB:", err));

// ✅ Định nghĩa Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model("User", userSchema);

// ✅ API GET all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
});

// ✅ API POST add new user
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
});

// ✅ Start server
app.listen(5000, () => {
  console.log("Server chạy tại http://localhost:5000");
});
