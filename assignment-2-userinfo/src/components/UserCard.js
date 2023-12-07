import React from "react";

export default function UserCard({ users }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>city</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td data-column="ID" >{user.id}</td>
              <td data-column="NAME">{user.name}</td>
              <td data-column="USERNAME">{user.username}</td>
              <td data-column="EMAIL">{user.email}</td>
              <td data-column="CITY">{user.address.city}</td>
              <td data-column="COMPANY">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
