import React from "react";

function UserList({ users }) {
  return (
    <div>
      <h3>Danh sách User</h3>
      {users.length === 0 ? (
        <p>Chưa có user nào.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
