import React, { useState, useEffect } from "react";
import API from "../api";
import EditUserForm from "./EditUserForm";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Lấy danh sách user từ backend
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  // Xử lý xóa user
  const handleDelete = async (id) => {
    await API.delete(`/users/${id}`);
    setUsers(users.filter((u) => u.id !== id));
  };

  // Xử lý sửa user
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = async (updatedUser) => {
    await API.put(`/users/${updatedUser.id}`, updatedUser);
    setEditingUser(null);
    fetchUsers(); // reload danh sách
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách người dùng</h2>

      {editingUser ? (
        <EditUserForm user={editingUser} onUpdate={handleUpdate} />
      ) : (
        <>
          {users.map((user) => (
            <div key={user.id} style={{ marginBottom: "10px" }}>
              <strong>{user.name}</strong> - {user.email}{" "}
              <button onClick={() => handleEdit(user)}>📝 Sửa</button>
              <button
                onClick={() => handleDelete(user.id)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                🗑️ Xóa
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default UserList;
