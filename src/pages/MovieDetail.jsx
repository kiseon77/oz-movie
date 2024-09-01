import { useEffect, useState } from "react";
import { imgBaseURL } from "../data/daseURL";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Layout from "../components/Layout";

export default function MovieDetail({ setSign, sign }) {
  const movie_id = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movie_id.id}?language=ko`;

  const [movieDitailApi] = useFetch(url, "GET");
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    if (movieDitailApi) setMovieDetail(movieDitailApi);
  }, [movieDitailApi]);

  return (
    <div
      className={`relative bg-cover bg-no-repeat bg-center  h-full pointer-events-none pointer-events-none`}
      style={{
        backgroundImage: `url("${imgBaseURL}/${movieDetail.backdrop_path}")`,
      }}
    >
      <Layout searchBar="hidden" sign={sign}>
        <section>
          <div className=" absolute bottom-0 w-full h-full bg-gradient-to-b from-white/0  to-50%  to-white"></div>
          <div className="flex gap-6 p-6">
            <article className="flex-1 rounded-2xl overflow-hidden border-2 border-gray-200 drop-shadow-lg">
              <img
                src={`${imgBaseURL}/${movieDetail.poster_path}`}
                className="w-full"
              />
            </article>

            <article className="flex-1 rounded-2xl p-5 bg-white/30 backdrop-blur-md drop-shadow-xl border-2 border-gray-200 ">
              <div>
                <div className="flex justify-between items-end">
                  <h2 className="text-2xl font-bold ">{movieDetail.title}</h2>
                  <div className="text-sm font-light text-white/80">
                    {movieDetail.popularity}
                  </div>
                </div>

                <div className="my-6">
                  {movieDetail.genres?.map((genres) => (
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
      </Layout>
    </div>
  );
}
