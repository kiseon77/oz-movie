import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Layout from "../components/Layout";

export default function SignUp() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout searchBar="hidden" sign="로그인">
      <div className="w-1/2 m-auto">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            <span className="text-sm ml-3">이름</span>
            <input
              id="name"
              type="text"
              placeholder="이름"
              {...register("name", {
                required: "이름을 입력해주세요.",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => {
                return <p className="ml-4 err">{message}</p>;
              }}
            />
          </label>
          <label htmlFor="email">
            <span className="text-sm ml-3">이메일</span>
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
            <span className="text-sm ml-3">비밀번호</span>
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
          <label htmlFor="passwordConfirm">
            <span className="text-sm ml-3">비밀번호 확인</span>
            <input
              id="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
              {...register("passwordConfirm", {
                required: "비밀번호를 입력해주세요.",
                validate: (value) =>
                  watch().password !== value
                    ? "비밀번호가 일치하지 않습니다"
                    : true,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="passwordConfirm"
              render={({ message }) => {
                return <p className="ml-4 err">{message}</p>;
              }}
            />
          </label>
          <button className="primary_fill_button">회원가입</button>
        </form>
      </div>
    </Layout>
  );
}
