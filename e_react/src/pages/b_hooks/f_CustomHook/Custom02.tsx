import React from "react";
import { useInput } from "./useInput";

export default function Custom02() {
  const { 
    value: name, // title을 name으로 변경
    bind: nameBind, // titleBind를 nameBind로 변경
    reset: nameReset // titleReset을 nameReset으로 변경
  } = useInput(""); // 초기값 설정

  const { 
    value: email, 
    bind: emailBind, 
    reset: emailReset 
  } = useInput("");

  const handleSubmit = () => {
    console.log(`회원가입 완료: 이름 - ${name}, 이메일 - ${email}`);
    // 입력 필드 초기화
    nameReset();
    emailReset();
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        value={nameBind.value} // titleBind를 nameBind로 변경
        onChange={nameBind.onChange} // titleBind를 nameBind로 변경
      />
      <input
        type="text"
        name="email"
        placeholder="사용자 이메일"
        value={emailBind.value}
        onChange={emailBind.onChange}
      />
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  );
}
