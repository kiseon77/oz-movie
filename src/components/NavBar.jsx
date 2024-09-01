import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";
import supabase from "../supabaseClient";
import { userSlice } from "../redux/redux";

export default function NavBar({ setMovieList, searchBar, showSign }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState();
  const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=ko&page=1`;
  const [movieSearchListApi] = useFetch(url, "GET");
  const [searchDebounce] = useDebounce(movieSearchListApi, 3000);
  const user = useSelector((state) => state.user);
  console.log(user);

  const signOutHandler = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) console.log(error);
      dispatch(userSlice.actions.signOut());
      alert("로그아웃 되셨습니다.");
      navigate("/");
      location.reload(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchDebounce && inputValue !== undefined) {
      return setMovieList(movieSearchListApi.results);
    }
  }, [searchDebounce]);

  const searchBtn = (e) => {
    if (inputValue) {
      e.preventDefault();
      setMovieList(movieSearchListApi.results);
      return;
    } else if (!inputValue || inputValue == undefined) {
      alert("검색어를 입력해주세요.");
    }
  };
  return (
    <nav className="py-6 px-11 flex justify-between z-50 pointer-events-auto">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="material-symbols-outlined cursor-pointer flex-none leading-8 "
      >
        comedy_mask
      </h1>

      <form
        className={`flex justify-center content-center gap-2 flex-auto ${searchBar}`}
      >
        <div className="inputBox w-1/2">
          <input
            className="w-full border-0 focus:border-0"
            type="text"
            placeholder="영화 검색"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />

          <button
            className={`material-symbols-outlined ${
              inputValue || inputValue !== undefined ? "inline" : "hidden"
            } text-slate-400 pr-1`}
            onClick={() => {
              setInputValue();
            }}
          >
            close
          </button>
        </div>

        <button
          className="material-symbols-outlined text-slate-500"
          onClick={searchBtn}
        >
          search
        </button>
      </form>
      <div className={`cursor-pointer text-sm flex-none leading-8 ${showSign}`}>
        {user.sign ? (
          <div onClick={signOutHandler}>로그아웃</div>
        ) : (
          <div
            onClick={() => {
              navigate("/signin");
            }}
          >
            로그인
          </div>
        )}
      </div>
    </nav>
  );
}
