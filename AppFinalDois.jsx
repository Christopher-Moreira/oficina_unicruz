import React, { useEffect, useState } from "react";

export default function UserService() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const payload = {
      isActive: true,
      limit: 20,
    };

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      setUserList(result.data);
    } catch (error) {
      console.error("Erro ao carregar usuários", error);
    }
  };

  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {userList.map((u) => (
          <li key={u.id}>{u.fullName}</li>
        ))}
      </ul>
    </div>
  );
}