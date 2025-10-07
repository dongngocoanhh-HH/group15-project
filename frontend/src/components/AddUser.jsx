// src/components/AddUserForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { API } from '../config';

export default function AddUserForm({ onAdded }) {
  const [form, setForm] = useState({ name: '', email: '' });
  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !/\S+@\S+\.\S+/.test(form.email)) return alert('Nhập tên & email hợp lệ');
    try {
      const res = await axios.post(API, form);
      onAdded(res.data);
      setForm({ name: '', email: '' });
    } catch (err) {
      console.error(err);
      alert('Tạo user thất bại');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <button type="submit">Thêm</button>
    </form>
  );
}
