import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Layout from "../components/Layout";

export default function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Layout searchBar="hidden" sign="">
        <div className="w-1/2 m-auto flex flex-col gap-9">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <label htmlFor="email">
              <input
                id="email"
                type="email"
                placeholder="이메일"
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => {
                  return <p className="ml-4 err">{message}</p>;
                }}
              />
            </label>
            <label htmlFor="password">
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => {
                  return <p className="ml-4 err">{message}</p>;
                }}
              />
            </label>
            <button className="primary_fill_button w-full">로그인</button>
          </form>
          <button
            className="primary_stroke_button "
            onClick={() => navigate("/signup")}
          >
            회원가입 하기
          </button>
        </div>
      </Layout>
    </>
  );
}
