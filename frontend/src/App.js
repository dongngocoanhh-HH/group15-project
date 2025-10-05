import React, { useEffect, useState } from "react";
import axios from "axios";
import AddUser from "./AddUser";

function App() {
  const [users, setUsers] = useState([]);

  // Hàm load danh sách user từ server
  const fetchUsers = () => {
    axios.get("http://localhost:3001/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Lỗi khi tải user:", err));
  };

  // Tải lần đầu khi App khởi động
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Danh sách User</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>

      {/* Truyền fetchUsers xuống AddUser */}
      <AddUser onUserAdded={fetchUsers} />
    </div>
  );
}

export default App;
