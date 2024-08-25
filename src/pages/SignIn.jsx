import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <NavBar />
      <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="이메일"
          {...register("email", {
            required: "이메일을 입력해주세요.",
          })}
        />
        <input
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: true,
          })}
        />

        <button>로그인</button>
      </form>
      <button onClick={() => navigate("/signup")}>회원가입 하기</button>
    </>
  );
}
