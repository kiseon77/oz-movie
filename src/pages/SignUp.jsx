import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    console.log(errors.email.message);
  }, [errors]);

  return (
    <div>
      <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
        <label for="inputName">이름 :</label>
        <input
          id="name"
          type="text"
          placeholder="이름"
          {...register("name", {
            required: "이름을 입력해주세요.",
            pattern: {
              value: /^[가-힣]$/,
              message: "한글로 입력해주세요.",
            },
          })}
          errors={errors}
        />
        <input
          id="email"
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
            required: "비밀번호를 입력해주세요.",
          })}
        />
        <input
          type="passwordConfirm"
          placeholder="비밀번호 확인"
          {...register("passwordConfirm", {
            required: "비밀번호를 입력해주세요.",
            validate: (value) =>
              watch().password1 !== value
                ? "비밀번호가 일치하지 않습니다"
                : true,
          })}
        />
        <button>회원가입</button>
      </form>
    </div>
  );
}
