import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage } from "@hookform/error-message";
import Layout from "../components/Layout";
import supabase from "../supabaseClient";
import { userSlice } from "../redux/redux";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userinfoData) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userinfoData.email,
        password: userinfoData.password,
      });
      const userEmail = data.user.user_metadata.email;
      const userName = data.user.user_metadata.name;
      dispatch(userSlice.actions.signIn({ email: userEmail, name: userName }));
      if (error) console.error("Login error:", error.message);
      alert(`${data.user.user_metadata.name}님 로그인 성공!`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout searchBar="hidden" showSign="hidden">
        <div className="w-1/2 m-auto flex flex-col gap-9">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <label>
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
            <button className="primary_fill_button">로그인</button>
          </form>
          <button
            className="primary_stroke_button "
            onClick={() => navigate("/signup")}
          >
            회원가입
          </button>
        </div>
      </Layout>
    </>
  );
}
