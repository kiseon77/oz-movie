import React from "react";

export default function SignUp() {
  return (
    <div>
      <form className="flex flex-col gap-7">
        <input type="text" name="name" placeholder="이름" />
        <input type="email" name="email" placeholder="이메일" />
        <input type="password" name="password1" placeholder="비밀번호" />
        <input type="password" name="password2" placeholder="비밀번호 확인" />
        <button>회원가입</button>
      </form>
    </div>
  );
}
