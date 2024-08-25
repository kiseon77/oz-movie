import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";

export default function NavBar({ setMovieList }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();
  const [searchDebounce] = useDebounce(inputValue, 3000);
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchDebounce}&include_adult=false&language=ko&page=1`;

  const [movieSearchListApi] = useFetch(url, "GET");

  useEffect(() => {
    if (movieSearchListApi) setMovieList(movieSearchListApi.results);
  }, [searchDebounce]);

  return (
    <nav className="py-6 px-11 flex justify-between">
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </div>

      <form>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="material-symbols-outlined"
          onClick={() => {
            setInputValue();
          }}
        >
          search
        </button>
      </form>

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
