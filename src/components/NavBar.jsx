import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="py-6 px-11 flex justify-between">
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </div>
      <div
        onClick={() => {
          navigate("/signin");
        }}
        className="cursor-pointer"
      >
        로그인
      </div>
    </nav>
  );
}
