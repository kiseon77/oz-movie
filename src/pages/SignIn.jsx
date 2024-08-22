import React from 'react'
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <>
      <div>SignIn</div>
      <div onClick={() => navigate("/signup")}>회원가입 하기</div>
    </>
  );
}
