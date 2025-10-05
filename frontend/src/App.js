import React, { useState, useEffect } from "react";
import axios from "axios";
import AddUser from './AddUser';
import UserList from './UserList';


function App() {
  const [users, setUsers] = useState([]);

  // Lấy danh sách user khi khởi động trang
  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Lỗi khi lấy users:", err));
  }, []);

  // Hàm thêm user mới
  const handleAddUser = (newUser) => {
    axios.post("http://localhost:5000/users", newUser)
      .then(res => setUsers([...users, res.data]))
      .catch(err => console.error("Lỗi khi thêm user:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách User</h2>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
