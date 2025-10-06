import React, { useState } from "react";

function AddUser({ onAddUser }) {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    onAddUser(form);
    setForm({ name: "", email: "" });
  };

  return (
    <div>
      <h3>Thêm User</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
}

export default AddUser;
