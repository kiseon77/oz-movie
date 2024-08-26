import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";

export default function NavBar({ setMovieList, searchBar, sign }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();
  const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=ko&page=1`;
  const [movieSearchListApi] = useFetch(url, "GET");
  const [searchDebounce] = useDebounce(movieSearchListApi, 3000);

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
    <nav className="py-6 px-11 flex justify-between">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="material-symbols-outlined cursor-pointer flex-none leading-8"
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
            onClick={(e) => {
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

      {sign == "로그인" ? (
        <div
          onClick={() => {
            navigate("/signin");
          }}
          className="cursor-pointer text-sm flex-none leading-8 "
        >
          {sign}
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
