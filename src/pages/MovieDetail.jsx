import React from "react";
import movieDetailData from "../data/movieDetailData.json";
import { imgBaseURL } from "../data/daseURL.json";

export default function MovieDetail() {
  console.log(movieDetailData);

  const movieDetail = {
    backdrop: movieDetailData.backdrop_path,
    poster: movieDetailData.poster_path,
    title: movieDetailData.title,
    popularity: movieDetailData.vote_average,
    genres: movieDetailData.genres,
    overview: movieDetailData.overview,
  };
  return (
    <section
      className={` relative bg-cover bg-no-repeat bg-center  h-full`}
      style={{
        backgroundImage: `url("${imgBaseURL}/${movieDetail.backdrop}")`,
      }}
    >
      <div className=" absolute bottom-0 w-full h-full bg-gradient-to-b from-white/0  to-50%  to-white"></div>
      <div className="flex gap-6 p-6">
        <article className="flex-1 rounded-2xl overflow-hidden border-2 border-gray-200 drop-shadow-lg">
          <img src={`${imgBaseURL}/${movieDetail.poster}`} className="w-full" />
        </article>

        <article className="flex-1 rounded-2xl p-5 bg-white  drop-shadow-xl border-2 border-gray-200 ">
          <div>
            <div className="flex justify-between items-end">
              <h2 className="text-2xl font-bold ">{movieDetail.title}</h2>
              <div className="text-sm font-light text-gray-400">
                {movieDetail.popularity}
              </div>
            </div>

            <div className="my-6">
              {movieDetail.genres.map((genres) => (
                <span
                  key={genres.id}
                  className="mr-2 font-mono px-2 py-1 rounded-full border-2 bg-gray-200 text-gray-500 border-gray-300"
                >
                  {genres.name}
                </span>
              ))}
            </div>

            <div className="my-2 border-t-[0.5px] border-gray-200" />

            <div className="p-2 text-base font-normal">
              {movieDetail.overview}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
