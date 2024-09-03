import React, { useState } from "react";
import { useMemberStore } from "../../store/user.store";
import { useAuthStore } from "../../store/auth.store";

function Zustand02() {
  const { members, addMember, updateMember, deleteMember } = useMemberStore();
  const { user, logout } = useAuthStore();

  const handleCreate = () => {
    addMember({
      id: 1,
      name: "이승아",
    });
  };
  return (
    <div>
      {members.map((user) => (
        <div>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </div>
      ))}
      <button onClick={() => handleCreate()}>추가</button>

      <hr />
      <p>welcom {user}</p>
      <Login />
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

//# 로그인 컴포넌트

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuthStore();

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => login(username)}>d</button>
    </>
  );
};
export default Zustand02;
