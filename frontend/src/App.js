import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  // ✅ Lấy danh sách người dùng từ backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách:", error);
      }
    };
    fetchUsers();
  }, []);

  // ✅ Xử lý thay đổi input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Xử lý khi nhấn "Thêm"
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra dữ liệu hợp lệ (Validation)
    if (!form.name.trim()) {
      alert("Tên không được để trống!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Email không hợp lệ!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/users", form);
      setUsers([...users, res.data]); // Cập nhật danh sách hiển thị
      setForm({ name: "", email: "" }); // Xóa form sau khi thêm
    } catch (error) {
      console.error("Lỗi khi thêm người dùng:", error);
    }
  };

  return (
    <div className="App">
      <h2>Quản lý người dùng</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">Thêm</button>
      </form>

      <h3>Danh sách người dùng</h3>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            <b>{u.name}</b> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
