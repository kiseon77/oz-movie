import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Layout from "../components/Layout";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userinfoData) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userinfoData.email,
        password: userinfoData.password,
        options: {
          data: {
            name: userinfoData.name,
          },
        },
      });

      console.log(data);
      if (error) console.log(error);
    } catch (error) {
      console.log(userinfoData);
      console.log(error);
    }
  };

  return (
    <Layout searchBar="hidden" showSign="hidden">
      <div className="w-1/2 m-auto ">
        <form
          className="flex flex-col gap-5 mb-9"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            <span className="text-sm ml-3">이름</span>
            <input
              name="name"
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
          <label>
            <span className="text-sm ml-3">이메일</span>
            <input
              name="email"
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
          <label>
            <span className="text-sm ml-3">비밀번호</span>
            <input
              name="password"
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
          <label>
            <span className="text-sm ml-3">비밀번호 확인</span>
            <input
              name="passwordConfirm"
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
        <button
          type="button"
          className="primary_stroke_button w-full"
          onClick={() => navigate("/signin")}
        >
          로그인
        </button>
      </div>
    </Layout>
  );
}
