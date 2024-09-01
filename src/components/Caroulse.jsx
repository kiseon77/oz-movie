import React, { useCallback, useEffect, useRef, useState } from "react";
import { NowPlaying } from "../data/daseURL";
import useFetch from "../hooks/useFetch";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

export default function Caroulse() {
  const [movieNowPlayingApi] = useFetch(NowPlaying, "GET");
  const [movieNowPlaying, setMovieNowPlaying] = useState([]);
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState();

  useEffect(() => {
    if (movieNowPlayingApi) setMovieNowPlaying(movieNowPlayingApi.results);
  }, [movieNowPlayingApi]);

  const preventUnexpectedEffects = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const onDragStart = (e) => {
    preventUnexpectedEffects(e);
    console.log("start");
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
    setIsDragging(false);
  };

  const onDragMove = (e) => {
    preventUnexpectedEffects(e);
    if (!isDrag || !scrollRef.current) return;
    const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
    scrollRef.current.scrollLeft = startX - e.pageX;
    if (isDrag) {
      setIsDragging(true);
      console.log("move");
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        e.stopPropagation();
        setStartX(e.pageX + scrollLeft);
      }
    }
  };
  const onDragEnd = (e) => {
    preventUnexpectedEffects(e);
    if (!isDrag) return;
    if (!scrollRef) return;
    setIsDrag(false);
    console.log("end");

    setTimeout(() => setIsDragging(false), 0);
  };
  const handleClick = (e) => {
    console.log("click");
    if (isDragging) {
      preventUnexpectedEffects(e);
      setIsDragging(false);
    }
  };

  return (
    <section className="">
      <h2 className="px-8 py-4">상영중인 영화</h2>
      <div
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onClick={handleClick}
        className="hidden_scrollbar px-8 gap-5 flex flex-nowrap
        overflow-x-scroll"
      >
        {movieNowPlaying.map((movie) => {
          return (
            <Link to={`/details/${movie.id}`} key={movie.id}>
              <div className="w-44">
                <MovieCard
                  poster={movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                  className="w-6"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
